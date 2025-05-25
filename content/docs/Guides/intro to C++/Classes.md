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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMBYMENW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDWjrKpYgYL7c6rzyDkftTVbGiGrIk%2FZtVyD3K9SjEwpAIgcJPsLvqHPfGFnsed7TaeVMu49ydQPNVPOV4%2FS8DScfYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDBpxrkaPMdLY6GmlJCrcA3tb%2FpfEUY3TWrx9e6Yq0ljq5KLdDeQhvKEAJ3XIycS%2BfqDJFYrjggsNJ7B2zLoKBUlP6DsA73Xya7qDICCKRTXwqodLTFpak2sEJaItCh6EKga5XbOvYhAnkispoxgtz27140HoXkGmNnFY8RCBI2I3AEn4CmFqeUgZSGb4fw2aN46xF6BPpPjCbPPrwayPl7%2BKosfHVCIcSjXKMnr%2BNoQIDweEtKnoc3HcidOk8taLv6tNP12CjNg5HN0UjuVfhFsOSCj2HWPyiIbiJWsENBYDLbCwHyDgJek4wpgxTKo2gatGbn4SerFbVN7R6c0yqXD6JRsqKVAEJY8aaFksmmij6JQNLwY%2BHfIGY6Ni5%2FZoyWupufsyASZvrDIBKYEvQ%2FyzMFnH5Z5Uy6O5q73pbAReAmkxI22WG%2B%2BFKui5UCnFjSvLSGT30rMUvDkegVP4x7NvGhfAp%2BtdCtPe%2FYyx9BDyam%2F4Bc%2Fb5W3aMDszJu54KBm6Ube2jg7PRDgz6V%2F2P4oFqmvt4G%2BvVYoSOmKWfhV3RvqMriOXT25Xt%2BP4EGqzdeMvnswkIsh%2BS5YHHnodgXI1IgYPeDuOZjdxMl%2BycS2HfTGWZRTkzScq%2F6tWS3Cik6Pe7a8%2FDg%2BIqM0jMIS5ysEGOqUBQAnzPKJQlsVCOkBkG62%2F0riiEyZ8rhFiGpA1nWEqFsxw1Y52I2ZY31NtAxzmeBBCO1CcoDPPfO6uWiFlja8sLY5efiNWnt6swATDRYZkw4kHigI%2F%2FMCYeDpQYVmwmHvXrHAbJKDK5atT4ff5zqrttjXYnzAWBhA5Ba7kmhWat%2B%2B%2BFpwSyzQbmy%2F2lj2P2MapdcSXYxLNxEmpJdq6pOsU6GicG0QT&X-Amz-Signature=1ff79f56073f959339dd292774a26f3ce824734642e204fa86c59fa47705e8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
