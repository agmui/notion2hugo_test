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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIHQRSXW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAUTpoZmOGyYON34pt%2F4WLRiahkvAc4dCMTguUGUScHUAiBHujwDcVs3OvlOP%2F6wN0qcZ6FksJyHWTG6i9uffp2qGir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM9oa2iCnHZUyq9X2gKtwD6bNAU4sCCJWx7SxBF1q8aZ1khHZGMHaJm9%2Fkq4sQQECVKEQ8Gbn1qXsNCEkbE4i0GUfigawOm6uJ8fMeBuZRLnKxc7GSTtwEVuTqS2q%2F%2BGbe%2BWPIV1Tjet82kVU6KFgP0RVRaH1m5ZNZxXL84bOPsk%2B3D%2FS3OhO891EA7r%2BDYXamwd%2BqBvfUYyTMkIENBU6jJyjTuOGmxFS44%2FwsAb%2BzCEymmRFVhLcSJlvYDGWT0q6owbOZYyEoCpfBZMFGyWCe%2BZyUyAtUYQsiphBQaEJLVZWkvOrwrzXlhZReXUzxahjq6yHVmZu%2FtLE1bt4mrF10MZlrp9lUTaASPnai%2FHUlQDe2k5Se9RaFm3tvtepWg59529pttGs0fXRPdg6a%2Bu2b2zU%2B%2BwA9iggATN4QzbRUJGeuSV3cIqyPYhu17iySN09M1WjENgjLQngRA474kSIulI4ielsNapVVW5X7NrIA0%2FDjPHmEv5tHRVTNgov73u7%2B8Mn7MkmzhWPwXEpF5u3lNopMTYOLjJb1o8ZwdOJcCSqjAsuUt4kHIiEIBeVnBZZ1Y80GvW0cZQWVLwM9zkD3r0hoSycd8oGOkV1JXtDbQb7MxDMXN6lQ8We2JHRno3H1ju2aStfC3D1QYA4wvaD4wgY6pgEz2SkeOIJNfSVXHX5emcFuNr4eWHEo%2BXLLdUlQ8IMYEGYaFQS3tdQ5hhnXAfZri%2Bzuelj0OkC9KAj8oOIbzosBgHrZZ784ZPrcb5dG15l6LN44MR%2FtiPz0FHcESKurSVkHEn4RvgX5IwZ261jSfhT1B1QyX%2FHD2J447WOOpSR%2FmwJ5U%2FFS%2FF8fjFPqqPhPpTChc1hQsYgKIzmbgo%2FmI5RrY1nwvMTQ&X-Amz-Signature=5bd86619e26fd1a67fc7948b1ef12d9e020dfaebe70502d7ffee19e47d10b434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
