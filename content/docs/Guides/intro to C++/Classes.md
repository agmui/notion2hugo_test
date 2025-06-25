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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NO3RNLB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCShRPdaeZVgcBbEa9fSAqP4n579iU6jiqHzc%2Fe7zuYiAIgSZ5KdJqE5EKMZty%2FsOpStgvCfri2eXzNMFFsBgbpqeMq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGB3gmmDZRC1cUNuBSrcA3KHje%2F%2FCcYEQHtKRvZUkmz8LdTam4koiUh%2F61K4ydN38xDXfZaGRCwnc60efEmMt9dl%2B6iIGAsk2V%2FArNkaZk8tTlRMYq7ZvQFUL27v0EBaN2WJ4%2FbSO2ioHKixNTHtCiKYiecs4RrVYErrCo7YwVIdR6k%2BegAiAF8bmNLoGlMzjrY989CEwQjI%2Fvg%2BmvPZD3jT2cd0vgQz57BLx8ZKOmTvGxgElv0rd%2B0QGsEuHPMr8QDhzENKDM71cERfiO8xdXwiAEfwZ%2BIa%2B6UKH2C2v3o21DIQD8SvON4Sw87fckOI4JyH%2FTOCeY6JjzuABeWeRKMo6oj8nShuR1iKkiTalLr1fSwHqVNeGmg3hVRvO%2FNqxIgfNm%2BZqu4IPcmId94YmAPHmyP%2B0iLtWTtBmJuZrWwTdcYsw%2FRp%2F7TUwuKyGUG2fK7ivkOTCA7xs4YMC%2F7ds%2BLm4GsN%2FbvkV79MvQJQCqTXw7rKImKKLGgFlLFkYuqcCmBPO3d0SdMPXwFkC08FepszhwWW5qqVY%2Baebybkde1dNhuUQYEjJJtYB3hzCfOYwcn5bJfPUrQKPYu6tInF%2FgYYnpiOAVV5YPNU0EJtGUoiAr2EHvTNYLHTXUKE9Nc2FqSkOi5a4Le7NDoTMOev78IGOqUBKFe470YeVAy7R25FP1BpGKuam4NjYsd6NP071bisrdikLgzdcfrzrpRo3FhsdxDAu%2Fbq%2FbIabfijlghxNQArRym73Yi6rMrNVDOqod8Ck7hXTUPvAoQliOHyolGpxEXKuDEAW6fcyFD4z1AbxZhUtzYpNoik45gaKk8%2BW0l7E5BQIP59i3JgMC3O3mpRsJiblG0Y9oW76s04DmHixZQe2eXvmIDG&X-Amz-Signature=25838a282a4586d59d573a1793132bebf9631909e0a2d3d111bed23f1ca7e85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
