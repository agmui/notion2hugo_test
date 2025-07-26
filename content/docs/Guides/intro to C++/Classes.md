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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623Y6CORE%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDZMbp7wQLZoP%2FxYiljyMucJyzq%2BEx%2FSX9Zibruzxx%2FLgIgQRV7fyrb%2BBFvrKzSIWO6%2BbpGEFjxvxIlTh%2BLl0hlNPAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDE6EYjKQL4pcBmpFySrcA4rm4iVp072i6oEh1TlGWlWg2K0VLk4Eu4Ww%2F1n7R22FGSuyCZKXNh81sVb09Wv95KmQhllqSBRLjErzMDqUchImUZnRb47v0gsgCPO8SMh8yFswh8cZ0CR7%2F6dgiVVpf0DwePy6KPmxAM4X1gH4PfQOtjnfIEoawRdLICYa%2BXhnlUgjfaFaMCPDV1EJVneb7Pi9sc75zFR7pJspbnHSwZ1dMNEovm%2Bz5%2F%2FfsmU6BOjfGc0qfDqPPYyec0LLLL7k%2Fh8wEbPb4Os6p4AqjbsEwiMkZgGmoM8%2F9CgPbeq5mnENj%2BCOmKDU9QuwC3Z3KmFJOlsIa3HCnEbrCxxtAKW%2Ff6x5gfqy%2Bvpkg506EU2cKvkwsy8DMtI6cSmbj84hlM0ojPDBGsW65G7s8YGIJ%2BP7VzxdVHEUVRanfRVsHpz0Zs%2FRxxlI3S41oFey4%2BGfb6Ka2sgJbEoqWxQCqGvU8ojVBssfGNdWPKFWwgpA0pLYhVEPz%2FJzZ1zOpTB8JBwDS%2FasBf3gytWexNioR6Ko7TP9OAcRqjQOe7M5pPS42hy34uQnch%2B4h6L6P8l3ijZaM%2B9Ts6989xpZYfqDLhwKJgTYVYD0K2%2BjkmSgIYlRsbKIaa1YKz6RyTvXigR%2BgdHHMNH%2FlMQGOqUBz6hlxMFDI33HUqAAk6tW6i4FW1%2F5Kk879VqxBxPs%2Bb1IPiHx6L2hn7w4%2BSwvoCdZYigoWh%2BPoDx%2FpsGQGvHZvdT%2FiiPo1oJ3FrKHgcz%2BtPkb7TNuJsuNogvsMaxnCeVM%2BJ9ebc16LW%2F2gvX78aE5DIqc0p%2FvlLA16aufQg7gYfSoTjF5XaqwurEFncJ3aOzVQoSTqYIiW%2BPRk8trV7tTL1g3OxC1&X-Amz-Signature=ceb7c0401d7efe95362662a261995bafe2b0befc191c91faebd34cf70c436336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
