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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X7GY6MA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCOs0xIZG3rnKyNvLymhfXbv0oFU3RXnTbIfAPPpAwtgIhAKPXTH%2BMBV9rIbW0YQl7A7cj7DIDnmtB8ooEMZFs3hq8Kv8DCHoQABoMNjM3NDIzMTgzODA1Igw5n5DdQ1W9iFMnvOgq3AMB2R%2FcLZzqEGxSXupSlAf5P469GCLgw4CzGUuxZt3V4eytppoMgf%2FS50nNyC30mPzDuwW50RFy0Ni2aqsyg3D1ib0Td%2FII3l1u9oxuZAswUjVPxkA9%2FnQlTbFZbleyTTEgVJqGSUDXKtAY8Wgi2Zmw41TPow5VLyozDGwBoraqrDyA0Hjmb4r41xYhczWiYrnUnxJT%2FUoOexL%2FGMTU55GXeBgSReFoHWkHYBNuPMSxNj9IUZzEXVd7ufLRNIfoPg6lqEa%2Fu%2Bp1x%2FB0YPzXDpPtc5fwy8F2Ve%2FGInUUIGdglp2lwtq7%2BU3Z4xmT4WzjMNcOZW%2FsCX5OQvJxkaE31sbVRG1fsNcnAkvJ4vrO7V0zs1YwUVy%2FooNl%2Fweh%2FDORsm7B%2FCKB%2FofWLVbeGAncRCIV8bNpY0eX4VFAxd0gjqNaXPBYXkGXclM3LCSvS8ScP%2BFwBf%2BBamyvxZt6gmRKH9HmA8L%2F%2FZ6kZH%2BXF878vLG2w45AjbtoOotfH05CDqT0kh%2FUqZxbOqI17XFiQ%2B24UOY9y%2BBBSu1DWeiUfzg87q51954k5Iv3sERnSBChvUK2iQX8anwcQ6caZemJzM7JZ7ziYzAS04oCHBc%2FwaaGdQjyQ9CrzbZgz%2BtEmfaksDDok4rABjqkAeYsf%2Fw4AkEBeS3EM0NC2oLRGPXZ0MDVBc9PVbdFEk9KL0Aa7s5SRI9ZdNnE16%2BUId3Qs9BTbjEXgOfsGXlzz9NRWeCQZQf0rL41UPAT3P2PH2S4wZrJ4BHOTowbq51NYyuAM0%2FN9yZvGWOEJZK78t6C4R64quJ3wnU0m2z%2FwPG%2BH%2FT9eSIk5DG3XBoKSFIwRDf8u4ZnVoCRHlQUM81%2Bc65sxgo%2F&X-Amz-Signature=a49012b2ea9680f742d22899d405a1451e68824f11d1a72dc65a15c77b6eb7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
