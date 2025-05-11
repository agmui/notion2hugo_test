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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y76IVVH4%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T131623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCID8Tk%2FQ1DdirO9eQuZbfGpKotEOZg9Cb5e2U%2Bfr42kqkAiEAlQVl2%2FhmGGvCYlvS6gve4SMtiLsfTAI8w076OB%2Fh4I4qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsyqTfeJ12ekhHkCircA96PhoVQ7TQUd0m7vt%2BW6nMsxz5FAFJ4MkAVvA6O23LPXwiDX6DPESmgvQRPS53fmZdKiUu0lccEKzdYvEvWrjwe1d3ZYzlKpPALCcXlgUIMM%2F65mCZ4NnJxfzDFQHx%2BPgy8RLxFZs0dDIb7cAG3%2FUEbH3LurbBp1%2F0Bagh0XZ%2BaE43TVseO17plNAcSWDDmchUWw4jtxBr%2Fr%2BucwcFxbDsmt%2F%2FofQErVgcJYndE1teNv4mvTGwmvKzEw%2FIcSYD8FGQsOK4IlNLwfqNveBGfMA82IwoG9A0RoDhQ6L62%2FaNKNRDWm5p6YL%2BSVY6sR9ZX%2Fq1mjBj6RdPZCX6u92G%2FQWYsglrtx1Qze3pBvmtwLcoGsH7rLdZpZXU8NEUdjBRPCrNl8ZsIOfdD%2FJWS90H2Sf2Wck7Gy5btoVtAPMoDr3eaukTPlnLh4TncP%2F23RvUcm4w1tfuUbOgMQHps5EYoMzpN4n1NgI9jHwBC0cIRZeD05s1rRJRvPcdTQmMx8ufrwTCF4pREJNyRfO8MTUr8mEw3mwHWXi2TvhnMkVNfXpRM5hta%2FiSqlxTusiyHablfPTI%2B%2FNZ%2FmD0Sy4K%2ByylDOiPYM8SeaCrJbDgHJ98fRCULiAqN1d5OETtyLjr4MK25gcEGOqUB%2BQ58wrVHqOtac6eMIPw7WL8MSDhA%2F7FIaL4G9QupI3ly0hTmaapBuZO7yVEXtZCd%2BR5zUrEBaDUX0rHY7CZO7AChee4U9Rj5Bw%2FXNSOrnsjA4HX6v9jDnY9sl92pF5UhLL%2Bkg84lXzuuMP5Sr2r3xnguYczznu3XuHPr5rRZAXEjJu7ZrTY3xQCyyRXQxIwolSTcuQujUQUgwjg4mdshiJwcTVd6&X-Amz-Signature=d620bb1855c455d1790508a179bcafc61d58f561d6b146c7f9d5cf441138de3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
