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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DBPJXTZ%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGNzxFCCEcrcQ6GE5QMKWnnwDBzwpaDgpY88b4vf4ascAiA0AAtcgH9GpxNSpXHLlQZ2sKVKHRU8F6uo7WrLpvKD3iqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM9HtroZy%2BNn718liKtwDRd%2F0OEcuZtKRru1Kbb5gLIMpTs56zCIOho%2F9%2BdRw6M34359bOvbxKW3MGUDn0zJQY1s5gTke%2BuHk2IyaiiSBrbGB%2FEni69UU5qKwhTW1xvwDuuquIUgXx3J2TND%2BDsIXng85CjAuywLNlGpj7tIayJX7ie3ru9SR6RFVqUEJKTNecJqu%2BmQ721rFjxCQH4tZTZz8YQ8ZkchjGhuV570RDDPb8cvZW%2BVjVck1WdpXeOU2Tb%2Foc9nva%2FL7L0BZDVudhN6Z%2BIvJikhc8oO4r%2BncE5aPDOjs%2F8VIrGLGk3zjnE%2FiLgGINOCbNqIbDc2Vg7aKJPV9bZH76kgjIYuni6mPae79VRzuJQSIa%2FmMSu2tzdi6ieMQKrJKT58Waio3YqVR%2FIml00rAU4LX1mbXIQByI%2BWWOHhsMYv8bSG11mn3%2F5tdoGKwNuG4wFbD1jWhBMsY9gI5jiWI7tT5RbU2BDt8qV7CH8EbSh731nzOyOUM54S4MSgfJV%2F4BL0S7jwISqdOFOCvsqRDAsqccov60ttiuG95weGp%2Fak3cNE5e8aDDYixuKb%2F0%2FfYeBCOkr6inDuLUo9TzXQ4WCKLgDsspmOeu%2F66rHynl1icJR3dPmJ03ZjpbLvfTetW9ft%2FuKMwpu%2BixgY6pgEf10mo4LThb00E3tylROpJ1CBkozPzsSEKNwj%2F%2B2B1GPFF%2BHOq29FBJVrl8RsuAMUVjhN47V%2FBBzoUyurjtzEm8jJwKOmCyMt9l%2Fv4hLhayaLB9o4vylEW7uiYPkZdOMi17js9FAzmrKvV4GJb%2FSjurQI%2BwJHiboLkde%2FjYcvo%2FMIOVeBZ11X7PH%2F%2BWPJ7pYkxy%2F9iVSPnpHK5x4%2FofLr9XtrVlifY&X-Amz-Signature=14d7710cebc942e536c2c82d4c723c1e0dbff8deed7db6450816705f560a593a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
