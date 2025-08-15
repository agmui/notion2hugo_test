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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4O4GF45%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIADtIczcSLTCTolS%2FHR7gwy%2FSPfYwd%2B%2FeM1FNT04XvzEAiEAlHnvVSUqvaSv%2BcMG8LGFRyJnzNWCmba8zi3Pk%2Fa9Ik0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDDvZYl0HhWcqwHmEgircA6kAl%2BlGkvLzV9oqlNpI9HVdSVRVcqo0cfF5Krb6IYtNST5YlvMXrlQ2nKZCk8%2BDSmrhZLrdbyeSG%2FpIQjTDP3zyopm7%2FnAFJELdxAXECZmatpWpk2CfDB%2BP6Gu5NtieqvcPiUyjoKKJsYjW7svnnnY4YTqzKUaB4kA0wBA57EnxP0zxHTBFBCXP%2FZOdf1SVhTKzLxoVsxzzNltzsG7HbRCVrJZXa9Fj8vdBeJB%2BVaCPGuy0L5%2FrkQlKJMNnNYum%2Bzwf4b15iTuciJ3MjKQ%2FCGOPyIjov4QvowI7wfK7iqKskAtJryy9pzw6PAFEyAtheoCdYhXcM8pD5G5J1f6zlljvCIXT04KC0Q%2FiO3hMkV5ek01sUgMKOXHYl8uMFomi%2Bn5O7P%2FuuvK9M4SVOiv5%2FaGeaHDtHFPWFZ7xFTdEKDA9WxsOQj9adi3fEoJ9cgjhxG%2BqqpcuzaiscBqs1MkMdS0Qsm6XiIM0moonYmL5dYFsq1FmOLZei79u%2BS3e0zM5aQM9gv0d72fVIVLyLmn1ZqD1hUZiJFUtXDzb7bA2YIRvugMDdJHvuvmLI86U6q7pNPAujOVCTrJLdJX4eg%2BeFjD8voar6sR17wctCCRXXOFG1WyfsovkWps%2FQTHPMNC1%2FcQGOqUBbOCChnMvJaIkAu%2BvO6AUnkOwO3HuwulWhRUiplCym6JsG2VPQCgBpzzNnyhi%2Fse99%2BOs4ib5ZYyHNaNmuIAA7makX0kfuMqeCSL%2Fs8HTk13%2Fk2iQq9rvf9sOm6eEd0nTs8th5FUkRVaSOiXO4wizl29SiOEtAlcLjfgQ44spPo8cftV3x3Kdfxj7s4rQfpdxD6DoXs5Js6Q0cqfvSkQVXSdk81Tf&X-Amz-Signature=5d08b827d04a71e9dba084d3644da233720a42e6b7329fb511ebb63177fdda68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
