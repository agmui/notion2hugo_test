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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVAYOUII%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBeG35oE3bVxARHCRbcjsxH%2FcxbizUy2J7fQ87IjMR1VAiEAuJPgFWEEvsrsBPpahEaeS0An2XTQAhL%2F0MBfQaT9QvgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnVpfUGwfKrpS1HTSrcAx5vBK9ZO8doVL%2BPbBeFHhQv9uDr7%2Bwj5Pj9YNQ2M8mDCzIC8GcMnf7pDc80KT2CN77n5XZXW9qw2m6dNXi9QP7Gi6PoCiI91m0lrrUu7GBHBxHoaEGhwab%2F7QnwVleN7rm7%2F%2FszzpfJEX6w62SSVJmZjWeAya5ouuW0NRO0EeB7Z7ZBna145O%2FvmTNj6RC8BI8WFTTSSMwKROVbeXYksTDhhsvAZZHng%2Bo4%2FPFiQx4U%2BvSe%2Bc2q9GgTE55RK%2F1V39E7As9HSNXGiBqFpGn9rgLVn5bMOEq%2B94Lszkade8XHKQwqTvpZ9DJgsMv%2Bt7SBp6klLhDCvo70%2FP0r9M0fh8gxU68wbrMXMw48G%2BZpmR%2FRCysUR9lyKFw6eWQ68mzexelOea%2BYnpeA2dr55iXvUptTjiBVSq6jn%2FA6pgtsECjEAxcKY7F7wY%2FnQ8OTcme8913j%2BFvn6Tq6Zc4vpHPXj%2B6B4rSqiAoi2lpZfRGYWNcvHzQ6D8AucgNtjXJgny3jHce68rqShb7oLpzPIfB8uAAoGnXXYLhEBZWE%2BmHfpxQ%2FSYgDmHBKcJ36EgcuTNmYDr2kGwaVytWXgzb%2BR440%2B%2FNOhup8TzxxoLHu%2FRB7n9T%2FMFp2VroNttMQRMl2MNv6oMAGOqUB4GKA85anc9qhr8KdgSQwhFXUYfOvdY2jeGivBHv1N%2BN5ugNDgG6GOujfJeha4etxRmlSHt0eSHjcMor3l5tCSrdFtCvnD%2BHIX8hongFlMsB6s%2FMvHSLx6tjdUO2crg4pURonzXiGeJ1g0Sm9XOmSJJLAANz%2BmZB0hKQigRAyRcB6XWiwYtFC8dvura9ckrwFzzpPaNz%2FnqJeHk7MEGW1ArzbFKrZ&X-Amz-Signature=321c52bf5c635856b6d80b87880c931f3ee23ec8de2cd444223202604ad21062&X-Amz-SignedHeaders=host&x-id=GetObject)

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
