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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKEJCL5E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGx7Kv%2FYcEdt30Hd4d%2F79bAUWPvvr2cW8fLK4CjHYL%2BAiEA%2F4UUgAZaPoTINDq5p4w822HIWXMw0VTxJlz6NvlzvJUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDBa2iPld6OH7hYJlJSrcA4UjxTMNsQ3dxYa%2BsTmNbmlKQrmpwiRwiegyUZF1WZvudPqkPH6uYco41sY7mFeNC4CYm040FHzcQybbgu5PyAD5Uk4iEx%2FizZpw5YVvCd1XKSKF50ZgzIf4IK%2Fq0aA33zD7LqRzbdaSdcI1eXavk5sqfrPw5Dws5w5X3uvIEoCjiWScV58S1fDAba%2Fkp1kqjXOk2EHiQ7p7ZrEQNKc0Z3oc53DdhVRYznygH7DbyOCGQzRPdjwvmaPmg6CqHw21F2yEMOEABLKC3YX7CXAKeLLwqY1Pt9%2FlxcUWkCbYXMq9MqPXYmeHM0gbU%2F6YZyPnqQle17nUW2WV%2BesVfxh%2Fg01Ouuada0wDHt5vtyg6xo2%2BpR%2B%2BRCP7s72%2B%2Bt7YAtfxgxcikx%2BjAUPjzn%2F4hXy4FrhZSG9CtAZVvkfgRIQfaBpeS%2BGdOYDwBd%2F%2BHVHG%2BZjYKI%2FmkQM%2BboopQRVXb7CYb1%2BNTAyadakex7i6XKciJGGt1xfUZg3zekiJHfxtTH3SuC5bu1DW0x0fGqkSikjyYt1qtbTkUKoGmZBuaoI6QhsUW78d26%2Bm6O5baLxOaZ7CFfv9eK%2FOCYdwa8CYhpmBoD46bHP%2Btx6aKcHobt5wcCwfUFAB3xyRBABQMo3RMM7SvcQGOqUBGKPu0MHQQB%2FIl4CYhlHks9eECRE1hmXLUe6l6zO5niEVyGcpMpEjgR6EFJlFG%2BJiOoiX80NwpbcLNSH8OK3PbAYaLvq5rTJmAr%2FuP7Fm9EooNx44N0HZJYKojtIRkygFj7OMhl1gyc6gInOjJP8g%2FtTOocT09UHXZFrvm38Nzl85B32L5Kb1lo%2BYDUFPW5Khnm%2FGVM%2FkPbNFmoW10gGiS3kPjozY&X-Amz-Signature=d9e845d1636f6fdb3aec2060c6c364dd6307d945666de6ba064505bb5e08a369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
