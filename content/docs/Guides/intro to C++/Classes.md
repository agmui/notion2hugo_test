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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBYOYEO%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqIqjGf5gPSPiGyAqFe0UYhWDpIYJ47RHR5OizfSpXBAiEAyen4kwf2wB6gH6X0njinoJATYQExPO7WcxS0D6e1JzQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFyHm5K7FggutQnUyrcA%2Fw7EA2izumZwB%2BJFpVM6Cvt%2FU7IGVCndOm%2FzPwSp6X6DePBkKMvRGaFWnP%2F15txWcQMRbPkQCIZ1ozoj0FCbUq5VIp1BBu2cfohP5zvRlSOkoXhbl6a64Uvl2qCAFw%2B3aZoDArr2%2BMquDYGSt4kWGvB0kgcBFqLBesE3Vfg2TAF6MbZs0ml8lP72hUqb9nMhemR4SN66%2F%2F9VLQZALVWRH2c0xc69Xp%2Fe3pkyRHnMn8AsX6Ut1ViKwrnu%2FTTeSFuNDa9TFBfWp2ctXLiE%2BmYYKnuS1uwutSRod8GAexYKeeWdOFCMXx%2FxvFERSFVEhNz7hov0qZhqdcjJ1fa7NxDEHoeC9GFqg2Z5yGf66CfaIBL9ylC1YQVZ3m6L%2FwDKpxBtPV8FhRCK5MYrBl9GDecV6J9GO4MKZwhy1B3p0Vn7jzkBBFIOZLRtI9Q%2FO4uPT%2FCSCfB3k87ZzlbUTcx2JdTvEUfX6t3vftaHmsboAgSkrROe3S4eb8j8%2FBMVVIBahgYgO9KOmIZsS9t2M%2Fwvan9DBWIPnHm2snMU7Qa8EvPSPR9J0lA6noU3kjgFqo%2FsNMuKvyyjPgUuMe5DKyyomKiZfTVSJxrYIpAXQQeOXUN0MfgKsbukKcl0ayHR5%2FnMImbu8MGOqUBVCdDK0xEaKU7xh8kStsuQaPWrYEVP2sPfuEjYajR38RqSR%2FqozYE0B7bkud7kF9Klu99YWYz3u7LqnWE6v5d4JebiGLU35WOI8lpaxKPhHwoUW%2Bv%2F67662IpeSQuKfSeXff0LychbQYUUOb5XK5RKDub8RMXVmbU%2BKgh01ZZuJl1HKXfHD7fCLEQxL9Rwq1l1D3VsUPEVp%2BCUlPoza%2F4sJVhRDVn&X-Amz-Signature=98424c6aafb7eac6681a2cae6b183df8e5b88c7563fde0f24c31ae2626c1b7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
