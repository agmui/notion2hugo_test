---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PQ7E3YX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Wa0KT71VvpBHbYzXY4xh4%2B3B%2B9yr1lWiupC9Lc2AKQIge2olwtSSeJ%2FnlTLsR15I2ESbc6gGvGrovUwh5PuSelkqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjNWxT%2Fo7WSUXknyCrcA%2F%2Fg2Up3bYfzHNM5O5Jk9W7wLsEOulUIVxQUwVZGus98XHyEcdIqoCB5CCIDpXQbOc60QlaK8WinSLHu04QpCsuEF6ULiFTzHwrbqYbsR7YBCTux%2BbMRtmgGl9F63%2BuZtXWNK2F4HCQ4vRwNcHAuR78WS%2FHHVBkaiVx0GIblWsRgwpcj6W2SiDsznnRVFQk9mtdOQGjTMtsPq7uL9ecCTjKs2QArdUPUanrQAPoOuUaU3nwImUtSKZWY2jAjIyzP65vTU9pA9zXXUtE2veJ7DrKLQ0TsGpTm%2BAwfT%2BtIbiWNvMdIwFX0L8guWpiHWMc%2BTd2Ro2uh13cJKVmO0N6te6kxjwrdVX27MKZ91qTchHtPtnlpQMk3s6oTAsKRbDvMlIUdzkXHKg4xIzVTaFlkqIcizKp9fQrFT8rrxWsEYyl6%2BRn04A6UQfiXuOoIrMlZ5ki1mcJGHquYJ9CXS7Ui1AvmnSIQ09sZ4D%2FLJwfBG5DHgFntL%2BKtPXv7czWY3RzoTqEO68VVdsxDwafCrCU0v8G9BKRrRsKxxM1j0Hc1KHg%2FVjCMyDdaNmP7ZZ7YlD7DiNhiiAx1PeTIsGz8ryLv%2BhoWW6d380lqb8dDNlGr19F%2BSDdPPpBFSYFw1Cs1MN6GjMAGOqUBqKfw3GVm97dDCbmaHRd6hewoMOls1b4RtI1VDgbjf58bDKPwp8daOyh1JcWK3ssiLgOl3GNT%2Bz0nxIekzmgAW7vnts3gm8fuHNWke6vvPqYVO32inFjoUrsvmryY0ZoGLaExaJquaGyPq%2B2qEhrzSVOZHtYBA8nGgc%2FzXk5VFNnhpj5OKN%2BsyKKvU9C4pC1YZ%2BQ066Ad4HjI9A6UrM20gsaorQxJ&X-Amz-Signature=d455fd287779ddc6463bdc6a2245defa182d59df53e89cc041eddc19e7cbf310&X-Amz-SignedHeaders=host&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
