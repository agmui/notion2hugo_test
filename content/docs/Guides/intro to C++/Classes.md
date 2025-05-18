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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMNQG64X%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOY8zvnRhyML4uXLeOiP4ZwI67QCo6TndzwZyCpWMvSAiB0u6H%2FZvdrB32AcVm8md8rZ7eds9m6iV7PVPQ8%2Baccvyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMihxuEB1ROuBBjNNSKtwD7L7rlBj6cDjRdy9YrqphiceLYDpcLlY9CvTtcRoDED3cC2y40JQwR3kxR1W20303z2Q965PvOUn4B0%2FTYdx%2BvpYa8mV9rtTNXXPq5GkgRhVaZvOiMQXtlKyvy2WZTo8TFkQh8JEu6EvOayH%2BQQuMCteu9zMJb3G38fnmbgdG%2BpfV8rLyr9poTilLz0mlohpbN1ZPrta2UI5EeReMERMNDS0tZxFedxu7fOoTQeiu8Gb4CwH3MDitSMTjBX%2FoV3gPmCgD7Vfk3nEH%2FNiVplfajPaZEziPyA%2BgCfXeZP%2B9K%2FSZUz37VkNOER7TpEJpfTslSmaQoqH0O5EuGCc98hQdSRB3upNYE0VG1HU2e57K4vF2WhKIXZhKBstyWWXCHbc%2BRRgrJ4WH2MyjVHrwUJX1FvLmtjXKPGf0nHZmAOU2rtaoWmgZVgRwrcU5G6SvfQVrc%2B6luna68F80lTzo2pw8hHyaKMxbJAkgKLQaA4dlshElu39MRkvFOXaLQN%2FUUl0oim9cJwWkVjVhbnUb2hwuEKYpLZpDHLu2DxFcjzpuj17uigtVrgj%2BVuycGBjJ0KEd0ZK6VHWWeSi6f104CbOz%2FdLNvQabDFMmKhSH8gqXSKZb8LIdIThBRqYeK38w1cGowQY6pgFl4DsravONtPQGku56yJ%2FsZtQwYJUC6PN0LfvhUd96EQ4XAvTElAlrnWIurPRTSAJ0PPJEouD1ZZ3FfkXIAK5f0Vimfy0tI7YVtwvOVakuK1efpWhvcSoNYkduiOGVjdBzAMN9mxJIMjTn7Hnu1zZpy5QNOpqfR5HnAXT9YvsMPN4obY%2BhE6XBUCsGVwWA21FHHQd0eee87Z531y6pW4mibT6SgHUd&X-Amz-Signature=8049507e091d2dfee0acfddf213f6bf0e6f0db4765833d32abf7c40e56a887fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
