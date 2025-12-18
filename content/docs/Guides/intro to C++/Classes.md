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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4MBY5VU%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtSRc5UpHO9xawYXTJOKh8rxLtxFFg2xAtKou0QuKyZwIgUCsTClhwmZVXBD4DecC1pQKmDcZravnXnkH9p7AMbzIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWgpqDn10lMmPHKMSrcA866Ha1qkEc%2BwAESoEQBldxvKL9j5IFIVnB49aFUcyqm%2FFm9Gfa4od051J4G35cB7lMq7%2FiKgd3bqpfGWmmkaAyeIW0dWO6AixYdCNSU4E17siway308FFvjdZPYnhUbtlku8niR4v50GoE%2By0RCMl06%2BjWgWa1QwSGCtSQIM0gChBuCbSFtDQjRdXJHRkBnh8va1GA3vkLEuxmcCPrDMik%2B%2BxN5TikRy9ZaNKWpy%2BICJwHeYstXdRuozA6Gyr8vOOCUGy2GlUfzxJfRs9B%2F8yQ2DNpOZ7ZhRoFa%2B%2Br%2BI9D4%2BcGKScwy0a8TR758CocMSBsgd%2B7vWgeZKm5GeSJZYtIfXOYgufQh%2Fokl1xPr3iGwjkw8kZ%2Fxwj4Sut40fnoQK5PylvEjP3q8b8ywvnasVUlkf8khzRb8ET1IJx7jJj3flcJlp2JbHGuLz7N0%2Fh3YxV5o7m9wVgSe6dQGZ8axGfE0w68FI01TyDEQVq7rjI9Vw0YsRkxkCpnghov2P27lsaSbT48po2vMDuL7uHX6xVhqXWQyVFULT9a90OJJBQEVD%2FIGn%2FjCXoE53yyF%2Fla4rX6LiZIOuvH3HMDl9rxT0y%2F3EzaDDz0AJPE6UEbrnLzAN%2BHenlKQCLVhxbx2MNetjcoGOqUBBkNQ3JvPBmH%2FTuW%2Fj40qjiTYVJxYDb8LFUBLbivBJJrS4Mt1ymZyW1tA%2BomRlmduPSzycABUH3LFs5e0BOJdaUio86VClcCA0b9u%2FuXCg1NztyW2Pfg%2F%2BhQz%2Bx07fzxegDLr4dmNQ80KFE7sXSX2264EkvObNHxTCq1sCzKDOfTwOcGjPggJwy5sBDsuPDYM8xmLG2wmj95twXum5o02e1osSxZU&X-Amz-Signature=49785306adc10925d18866fda86cfffbac5927fcd1c775eab2bda74c4bd59c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
