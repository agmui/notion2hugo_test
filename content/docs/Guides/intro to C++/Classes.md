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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBTMLFXY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7nn%2FDSjGQwBGNWvNv2tQb55R5ZEVRPXWBy6seO9cKaAiEA6uTJ%2BcLlCOujV4ckbo%2BrQNI%2BKekoLZlht63E%2FUbzCrYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJhQo1G9A6sbgwbtrircA%2FaW5q%2Bjl8khgOrFYMcMpAAf561Fi%2BxFyXJRrVDJGNGthYdXMOVT%2Fvr2NhigLcuHz%2BPc6deXUTmn23qAoSprpRle1o8kBy%2BaBdE9%2BeOcEFUZAVgVTL56fO392F1jIAFY4EUiIU97NIV3qTpttrYKOZssfLuQk85bJcyB18mOQ8DBPcmHsvHCquYIvbpW02LFUp1LP1rchuWYlEq3vVyb4UKaeDPkwNMd%2FtpEY1QcTyO2EVvGe2dcoEETGy9sk5LbQdQmASrqvo6kmtVx0Eq1shHg3lSL6qB%2B9IHFQL9Oh8rfXOglqiEE6TWYQvwgZ1JXtDf31LfrbrtSqSSOPrhz2ALg%2FWAIM%2BijHBL%2BQMa93zqo8wI3eeDbv9MHVE8DXAwcJbfyXsvl0LuLURO0WGlAI7HFgmq9qP1npAWEAlND8%2Bbp2M58pdO2D4flUeXQb7T4juioCRSPmhsAJWRt8%2FIlQ48MtRteJAnCZyrl%2BleIzj9LT9FObyR5ZZ35Hnb91XJj6mCrYHKkLzghwZ6EF2wKCNbp7bKxIpHveNvwzd%2BPjMDw0lMuCTs6RZjIg%2BzRmCzKuPOhGSMex7xpQ8g9KZSumvFOpbP%2F4wXQYZGIrvjmdt70B3K%2BhK3RO%2Fw%2BxMpxMMvmtr0GOqUBIY1EGDqOu424jIqETGH8ujK0qrmPHuDeNyeXJjUOhxKXXCQwPFWUxyhb210z13a18bPI98jelVQTkADaDLxhLqo3uItvrHJPXk6N2GnzGUcbMztnzr5bcFlkSz9xfhZyfMWFAcHGG%2BDqoAaeX8H69llRnDZvDz8Zg554VrlL7%2FGYmMX03OyDygv0sQVzhdcbnGqXu1YxcoiAOybaecpDhPruxdXc&X-Amz-Signature=dbfb6f99644ce9cd826ecdf585d4218d19a34a39c0091cf4d8b074e88ef0f110&X-Amz-SignedHeaders=host&x-id=GetObject)

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
