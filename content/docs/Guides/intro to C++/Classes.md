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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUTMODJA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T004353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCicYHU1fSyUcrMj7muvbAbFL1PN8oEaf7Og1hBoohoXgIhAPRPb2WOZryubdJTgEdO%2F%2FH9POa3TtSy1BYruk8zGbVdKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHumtrOk7D4qAAZhgq3AMXUDL4rU6Vo9JS%2F93TF3jONO0uAnuLYnHazqJbjHzGcQBkDa85td%2FDPFQ233oGbfEwFCsCQmPbZrKTkPy5QswE1CIDeyCC71J4xP0hckkgtMMRB%2F9KJBVfx%2FWmE%2FWlNobunHxp9EPqZuEC6OLXOlsbl7QUaH%2BKr1Mkug8akFec8%2BBkcIndtS%2B17ZLNWcopBsbxYX%2BagSil8HIiX2PYLAyz%2BzPIzTHCkYxOHHgN9apbW1qi8WWK1L%2BLIc8NhIpWE4V0CagVRoyCfTXdFDiiUe%2FtGpwIGsxzzEGNJGiXhB0B%2BhyJXRgvoRqdnpNSNBtfx9gaLjffRisAOqhRDy9vA7PHXlvmSYCM9BWcGel9uaMc%2FxA54DS6YFwuz5w%2BUDu4203GffYqaHicHpNb8Ya7nxvtlNu2ZgmlHT6EXKpLQVbbwzvhSs8DPwJ6KzLqSb5BQkwFE9H2e%2BBjGWs96iRCqAz4%2FJPMq%2B%2BbHSYj69anFF2ajn0DWaxoKL5D%2Bncptv8ZkvhBOGgz%2F6VYxVvLPPQ43QTrD4kk9hYxcPt%2F5D3RuF6%2B7JkHQ8fZsJ9S8FIxplY5mNW3HPFSkUzAtjoF%2BoJATPOGyNBz2z6e%2B55qIigznpGqJmg%2Bmvc4vZrCxYl%2BDDCtrbXEBjqkARvuw75g29kUqNUy7z37wxt62B26HjDytFeMAFHtC8WCIu%2Bh5iQ3%2FvCQfxiCFe6s5fhChPYoGaG1%2BQ%2FoRtbmEcd0r9Ts%2FGu%2FxRwpLFXSZn3TnpteHE%2FbJnI1pvswP5ducIp02oeFxYHO5yQTEOgbcfBpEdcjOCMYQ9esnI0WLSgrL8de8YVmC7i6Scby4yc2EzzvQ5%2Bk7DvTrr%2BqJux56Xp3VS7N&X-Amz-Signature=3b9b933f33620e68001e79231d3ee79250384377ce1f19e55c4384828dc178c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
