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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GE5QCQQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNBjBK%2FzWV19oKpVaKXyoPs8QZfGK0KKC961nXJzcoeAIhAKtEq%2FYms21cXC0FFlb7oJ%2FhGhq2fLTUKLwb5ql45jyBKv8DCHcQABoMNjM3NDIzMTgzODA1IgzauXx267sYz9VDbYwq3APxhUNS2I3HGHydoMRXmBqyMw9%2Brvn9Y5%2FBRTpTWiEhNDWFAm7u%2BWw8B8hv3RAwnu%2BhvgTNJq%2Byzw7zW%2F9bKYNLTdVUlvZ9AdIpUidgfA1wnm43Nq%2BTK7guh4zgzQW8Oxzs2bS9YAAtEljeYh1p8OV1ehFX%2BgLZrof7sIcJX%2F9QhQ6FmcinHnYYzQwIeEMxehNsQFHH2hkkq2FMWIShfyVYcPRrFHUTv%2FquGhMXCZxccwu2P06wHjSQ7YykZg5kWGpgM%2F4rytjgSv3%2BYECU5svM8DAH7EH3W%2FBiHhcaF8nK%2BQWR85fckXe%2FgEiZazBlcSI5ZLykk8x7AMV2SuV0VKX9Gjn8Zks51Angv1cgo4AWBW9QZCPsotrUmah%2BWoW7DWlA5rfKyrkTN%2FiPZLwaMMQ1mcDzszCS%2F7W3B7R1botzZN8e8nh23%2BZ4gnLO0RAl38BbOBl%2FrhRtCBA39dHO%2FkVC5gcvO%2Bt90zZk%2Fe5DPB9bH90i4eKCIncfGWq2ltTM9mx7DcU98hon2wqy%2F%2BtfESrbSLUtlG31Y%2F4djrBv0C9tVB7siaIglvNoEp8vS4P9v0VoOP0xVyNcaJUXu%2B5hg1uOCLwBhCTQuoWa1VzjaZRIlkSswiwyhaU%2BFA84XTCF5fLABjqkAVXq4tPm%2FXl8vBH7s52JtP1PDDFJyaHLESsoTDGLsUBUVPw4dw7jSbr4OmEO7kYpxxBrFbWfK0stJ%2B4HxQbk0p%2Fm29QWgg1iKrJnCVhBaz4%2ByCa9lGqkMH4tmrzbFzrovzkPE2vuj8diHA3BpQLAKDhlJB9x%2BF%2FhRRelrhBBxNXAw9gZ8HtIGXQvH6Ftj8tbe0pycE2rRFSeoHjdP%2BHzatHpxFU1&X-Amz-Signature=e9a367b62b67216008a5a4728299da5a14cce29c52593d5647eed5117ffa7103&X-Amz-SignedHeaders=host&x-id=GetObject)

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
