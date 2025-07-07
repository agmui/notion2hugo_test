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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N6QLFDS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCBcRKSRawimb4InfSOSRes%2FSXprIg0hHwAC0zFu5llRgIhALQijLTQVvAM5y9yoSnoYGOpP8cukSus5MytT032g%2FcaKv8DCHYQABoMNjM3NDIzMTgzODA1Igz44UyxYbpOv6BpA3Yq3ANefKgORSNcBJjlzcJ5wuKL3XAgLRssaFVKXDmJLkdMd5diyKVaaKtRrFeIyaRCLXFdMmaaZ0TA2rNTVdTlcT%2F4FFSThZbONC3a%2BxavmZDBiksgfmakjgK1AWazDCdveEZlNXvjz%2FrnL9ViIevwLEEpMZUC%2BLyMmegecQ4k%2BfMg3KX7YCX9mAMrXUoxteNrNhjrFs3hIkUBNnb%2BO8038jHlDxgKg47ajdZUOfNw7V0ff3VtbTMT4rXaOPKzpr5JPXwAsA%2F8KMUmZqv9trcTeA1MvII4tAPyW1oVOThliteZKceeGj0%2BRY%2FWydNIDiK%2B5hRbh3p%2FRw%2B3hFCjgQXu%2Bon905xiWuA3Krf7n%2BwUrSWom1I%2F4Mkj0Cp4lnM5gBpzL1Oz8bS72bB3s2nWPrtqpq%2FaPr0W8PrlLMaMOaimATDYazSWfCJ7VV0zzgtSPWNu%2BxroqF7Iq7PD%2FmYK5MgZePR9Vg7FrsrOXLVUBMEL2H1hcjUSivUkpFArY1dXK1luus5IP68e%2BAnF3QamFw0ntyTt6kZQoGZJune432HhllUPlzsRtv%2B5DjvWFjqjaWVoG%2BFVysiK1O2U3rcGvzU3afpagNdi3oxa9bKOp1wx28u9oX1tPywCm39HuwwYbDCSjK%2FDBjqkAf0PYl2Z84ESeHhohWILuI5%2BGdr%2Bwzpy%2BFaxaU0aJapbLdlQnygnzCv6VnJAhEhRsoGCzR7ZO7ETiGM8xdfLsohQRBtE4LAkF3EJtyon%2B9w6zlA8iFbey6gydxyd8luiM5b27DqankF7JcZvUXf7ZeOc7mGWu2H3iZ0%2BJKjKUdRiHhmQT7NoXxdq1bfq2G5TSmbd3E7PWWlfIYgJ441Xu3pVhquX&X-Amz-Signature=72f8a170ac0dce49f2908cc2239bc897a0059c42734e182c063db86a79e00d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
