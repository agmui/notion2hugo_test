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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22KC3FJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDodtiSjMH%2FZjiWTyT%2BZlWjK4U6xNQMtbN40yo7r1oOyAiB69oajtP4ZHI%2FF08W61zaCvvf%2BNz9tP49dQ4ENLWKodSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmx6su9nj4gUhOJ%2F9KtwD7YbSvhVAi0a%2FM33kC0FFls9HqT61usw%2BZr59%2FkfkCGmFR8G7jveMIzGPbMK6vdC9Sl8m6eRmSE8xL3QnJhK%2FVOqdJBPKYwJrRR9h7UIN7nfnD7fnF4%2FpyaS5sVUPtr4%2B%2FCCgD9d%2FKGuO53gAx9qKxHzNwpRlCM4ro506sLvy15VIKGPcIUoO71Z6Ly51UmehARUWXUPwDiBCUBHCWxoE3fWIxi5W2bHQLPAtXCpecCyjxqd7TtYmhbo2geEDU5838%2BydMGoDdy%2FVhROZPEv1iPtvpVk7tLkVD3sC9yH%2F4GpvRlS5b2sRcH%2F3TQ%2BUD60TqkmcS4%2FVpL9bFI%2F7l5zpeLortd9jNZqNfoIT3wRZY47560TvVks8NEluY5%2B8FzYb%2B%2Bj5KhTJzFO%2By%2Fyq1c%2BTDMp%2F7L4ioi8ZlQvKmmgN6%2Bdm%2FBbg72rDv28XWrU3fiizL9riw4kNQRM5sX3H3xz8dxgNRUrsx8Z7g346Bnrsjlii8V%2Ff3TNTwRPIOxNVa9lnZqDsG8pRbVaTuGwTk35cYJWdIW37MlfmX2b3w%2FE9LnEAUBm5%2Bld1Dm7zfsKikSrUG9I6Kj%2BhlQV6BFBq%2BHbXBKNW57fv7%2F9dZyMF5JwDSQlNqJmsIJxP5wQyw6gwlcnbvwY6pgFardN1iKM8MptFQoY22gf4rmLYfTNVtX9VM%2BQsElY1zWpbOXJGLOD%2FJ1Gu04nHeBltWppVo2FjVObEpHKHyPNDU26bRqWnej%2BPQgFZQIvv%2FE8Eclx8iCZoiPGHWkmXoKEJPbC9wljjHGaAUibiOnFZmNXyoN0TF%2BT%2BguHV1Aa%2BGvWpjtTgLq5uqEcCipxEhj8VN7pnvqRKWjLk%2B6Uyw5AbbJvnDuln&X-Amz-Signature=1de28fe717a7a4c715521f8fe80afcc493915d9224edc6420999d0e61c05ff49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
