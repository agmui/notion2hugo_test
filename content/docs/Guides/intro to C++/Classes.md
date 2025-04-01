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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UINC2PSE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDTqLT8Sd29nqVv0SUiVUm8QPmR0MLlDALZkmG%2FpGT4dQIgIuZl9oyRYdT%2BqK3V2AktlgVu7LXIr1NzQDQTp8JUK78qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwqDqmlk3XduohbPircA407bQ8OUQy58eZbhDqi%2BRx1CjtlEz%2BZzhabwjnVMhU9F7oFNwECF8C41vHdOuY7F%2FjFx75ueUZSOeG9GBHMvWWBwsRMU69RN3m93x4BHh8IqeYI4U3xLM%2BiuqBVCkmfhIbJ2cf3X8E%2Fh5GvWfIWzLP4qA2M1rymAtY0ZGP27JCEcqQ5GXrAQ64eF%2BxvWVOZpJcV%2BOj9vpqfWFMWHVldQ1JxpxgiX8qMXSXQE8y6BVifZGejQ%2FR5iEfxUATfD5hWXEg57jJbW6HX3mvG7IGknd%2FfEErsGzFyrCzoMXD2tPys3hIfLtIh1%2FW9mM6zChYYm4ln2ohrcoWVGlBQCPOnz9I%2BFSLNMtOhrYeloVzraF4z61Jjn9A4BBafe0KVQdbNYYgsIW1jxpq96imBas9co7rQtYPrmQECodmDNzL7LxKQ2DjPcKXIHf7b%2BJGqHjOO%2FYqKTBr539VfpeUUXCB5e8KTeW3lazU0MfQme2UMU1SPd5L1ghlwXpkXr5TricQxIO%2BahLHCA9AGL4WQVuQvXnR7tDO7Jzz%2BeoBE9v55hgp7%2BJx4pBRNQ%2BxzwpB6JbXPd7F44qkiFu%2B96PYFE09QvfDM0V%2BUyRJi2egW0F5%2B3RWKOsCNL413GKJSPR2kMNupsb8GOqUBIXcWgVDoCQ1op4dPT3WkxOvZZb88J5q%2BjwLmEWjWKxai2g2To1rV1FdcHrFxaBrwdg%2Bbo1%2FEHWPUq8ZB3bm6itkXc%2BIKBt4G2P4zQSoLzhKOeqMCsUtWreeXyFegy9kaSZJDlfc2ZI%2Faw3Hee2VlDO%2F%2BfO36eJ3N9FSknXmb4mO4JF3jaPLIjIgDHyluchjHRAXVLS7SuR2BtYlcRZmKpvNhlHdI&X-Amz-Signature=5c914170c106abbd3d4c7f25e6e823acc24b14bf7429876bb4f24faf6d0d027e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
