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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R5FZEQP%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCDGFe8uzxAA4rKFM1IxxLk4ozPM2sOUap4ov%2BPva0HtQIgb7aAWeZCznNM4V0a0YQ8gc4cNxLIA8JT8meWgTOILrEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOCdP4VilgGLmZX2qCrcA8DVN0ACL2NR2Q3hmuSnO%2FbNxC5TzJy3UwcUjIgaCMAmvE6Rnhu%2BpM7ZTnZwo93Qea9SfbWkeNWvqor%2FX6YUhrh%2Be39IOW6%2FTDZi42ysT8mPh0SHjmPBiFEWD8oybii%2BbL93w0CI1vkraYSZn1wqOkVI4oZP1DPykioNTDgTp3qj%2FQFJU%2F7pIBMCLFLx7TPfAgCxE%2B71FQwOI5uKJR7Go9XDOWMz%2B9MAfJSftwBfAG0ordyxIwBcgRwewFrkFqyAAvjSvr%2B4%2FoqxgHzn7rs4s%2Ft8bljkFZ2d5VG9k7XJn1wfNkLAcE1sj1hKp3Bg5%2BvYyqJ0TYa7s8hGjd5sCUK0qDYugtakkuhohZgyORsSD33zMhAIcYsjc3jd4ROCxaM7ZmGQWYragBlwCxb2ZW7DPh1oAYYNF2IniL150rE1HWH64yZOJwxf3bB3z7Wtx9a7OiFcwpVKquspjneyDxY8b%2FO4UPMv5nHPc%2BU61Vv2PFqBm%2BxN9cy%2FEBNS7hdxfpWKlorS%2BnVxgOjUsT5P%2FY%2BaReZ2Eg8FzGQ11l68OYw0A1TL83PyYx7CFGGbSKxtkDpGfWQZup57%2Bi%2Ff%2BpZBW4zp1Z%2F1EKOurbviXSI4aORVdFRNjun%2BpD6b9lQFiqKIMKDss8IGOqUBkIID5SsINHXzX0a3ruv79KbSJieb3A2weQiniBHQxuDc56t3inn3NuDSM0vtnf2PIlLV1uUIcmIAKAhJt1yaaEg0YzgAxEDLyX8MHSSZPk9DWe%2BjKIhfEtRN9esyiwXiTu5ZKrHUmDlYvRNozDuhm0vdHCAXvr1g%2BpE7UCan0Vx4PMaPeAJjLnCcB9TkLUqD%2F4nU0OXpishco0PvsNJgPkDhwp84&X-Amz-Signature=aba78ff208e1c34fe5674fdd506a90ca44a84aa4b02bf6fb479f7a8f1534eef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
