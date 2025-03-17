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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISXPQK6%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHn5BNF%2BAOXE%2FRTZFeSvaHPutC0VJxKoNT0Ba5sZHFeUAiBaweU9jR%2FLFVTxCu%2FXWb7s%2Bl7t8SEvrzP2kmJSkUCPeir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMNnlYAfrFsNxB99i%2BKtwDxjEWoMIsapqR5DhAulvUrR5D2iZ8CTjEfft3scBUxr34pfuy9pmftGNFWusM2C8SukpjdwhH03JE4wu5n38aoiyk13nbAkQvTr4wEd8XuS1J1Q1Nh2%2FAsBmXhEYq9dUqJPaBeAZ20T9f593begRGRhz4j12HjervSv3a%2BgwHBSfbCC87mwiiH%2FvZGt2befxeQ2yRcx2LlS7yLHQFGirBejyR5VR5lw%2BNKjt8tIcAMfqzZbR4ZWrkonw%2BREeSKGNsqmkioVyoL8G6oXZwpKyYVwVvThK3XdPHReyN1F3Db6bISf63pEPGvJVskScDABu62Fciv6etIYny8mFtop5T1HXU5oSRiL5xSGuoiKKeiHvtyMq%2BvwT6nVfNMmigUOGPPmxIYHDgO2MJF%2FXZpgEiF5sv7es7Tbj7xtdDebzwkjNTbIKh0BF4CUNvXATWobVdMxgRyqxX%2FT5%2BiccZatSw9oaWmjd%2F2XCcx2DCkmykcCV2VtpHI5I7ZwQSyvPWEhgqGY2u42jQLITMx8IDInCEl1PkiZHEQBHCyDtVq9I%2BJkjeGXa0LWpCGLAYs7J0clqZlYCS8lQX5IySVMqDjUyTMsIPxKip%2BV2DkWF0cdqQv%2BQLU2K%2F1zlpWpCQCXww5argvgY6pgEn%2F8CHIlByoKj7ZwFeKN3zQdimvPpmLisIhSE8QVCpAlR%2Bgv9bK1W1q1yZc%2Fr1X7d7aXdHWPlyLO8OPjbGOErW7Q0OfHU3faNsTZGN5e2ebHtcvnPHIusUeiBfi7rTNy%2B5xFScNbV41FsNHmkfmW50f4awC5aJe2jsQUzGauBK6%2BphMpsQbk5MSh85BG5zfiWUzeo3hmiaH5RvItvll4uCeblvtst8&X-Amz-Signature=af3fef413761b5afb281c2a4067ae22dc79161baf02537128bc133284e63a392&X-Amz-SignedHeaders=host&x-id=GetObject)

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
