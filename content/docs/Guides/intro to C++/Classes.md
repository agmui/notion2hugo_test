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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVNAHZO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCRnT2F%2FeXFbVH2bN4InpasyiCdxEGCciVu%2BccDgNXlUwIgA1kFSnE%2FkInEhqYLp39z118NR4mP8NcIJvu0gAHQ%2FSEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVcwnAd762kq2CJBCrcA5%2BVnfcJeQYmzefu84FwpNqXLk7BRwre3REa7Inns7mdGaz%2FtMgZb35juFj5cTG6zXWFfUOCDPC4e3wRg%2FUfTy%2F7X5%2FTcXKw1R2Dagn%2BaT8LnGykwGnMs7ckv15HB60GzFbAET%2FzYCCWRiGLuS31r8J%2BRrMPb5nuI719lxGdtqdkqZ9sYynLHoPigefEzfUrzPfzbdAfnUzUkGZmYG6xBUDPsRt6Xc7K2C3LeJr2OeUQ3lPJnWMznR6c2KLvX04QK8KnF9uCGorbWEfMsUxIsHc3FzDO2HHRyOnTJDFqgefINMYfugOrViMmQ2zw7XyJdFjv4gMI7NET%2F%2BMDF2%2BIsIGOHSbJIQSbT%2FosFygonVkXxrdWCLrjxA4skRC8hq%2FPvQ64CUfqAXjZ9aD9RPjZKx4BoevvZ7vnNIg7SHEpKc%2BWVToVPzWJ3cGWIN8auDLYUOKZUluy5e7Qzaozkjv%2F6tg0afOVFvRYxOYr1IGNC4jKoiFYKc4QXXZnNf6c4w15HPezyHlYFeZ469B3o9283deqeHx5iTDZcmfA37XSoBHKM77%2FY%2BroG1%2BVRU88txEJitGRY9sCrceVq4nM9k%2BdDe5oadBhX6mfgly4hhmt4NS19BBfZhoxjbc2Z%2FunMKiS2cQGOqUBfh3r%2FnBHOt2atZPRsYND8KGMCIq8rufvTDYY19BOehcdnpYaTNb86WSV7WIsg%2BIjQ98nVq0ruZV4m1p2SO083f8HSVbOwHjz67v%2BFFJMgnbqORIY2NiN%2BnqjAS27NE8F6kmc519CkT6Y4JRf8o5mg0dcOwJDl1sQfCplDxi5NG5HTCQr6XHRklDzMYjhUUl%2BAtxschmAfLvigY6w04ISm6NW%2FZvj&X-Amz-Signature=ff66b0da106f329cfad5a0680e4268871dd62b11f4c474b4f8f14a3b2ad1a3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
