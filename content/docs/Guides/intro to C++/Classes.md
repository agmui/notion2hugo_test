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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTBYFOB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXuo858fW0Zg3wP1%2BCBMyEw%2FAs5rShgnSAoVuueO%2BddAiEAgC%2B8vNI2UP4%2B5LC74T4KTU0htigEgUvZULim2X9I1p0q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDI%2FZatE3Sb2Sig886CrcA%2FBlDT8%2BW9FU8kPkSz84v1IeoZyIILp%2BCUKh2nq0YV89ReFouXssU%2FUlef5P1SA3f5ZRX3oWM6tMCws10C4uDtnmwOOoFRcmDBg1%2F5azw7SmCHlhXQRk9zsdtzV0hnmEJaj%2FZbgi48vFM22TKdS8IZ%2BD5BGMrsIhX3R2V%2BKTgdI6o6EzL2tPhHV1gtBYkZ0ki%2BMkecbYnCG%2FZMkPkQo7OK1e5S8ugiRZ0wVFrtlSO75fH9%2BU%2BKQAqtHGHpbBqjDHXyktnR2CcQwWybxdLa69xTHlJwUN%2BtRuLx0Y798pK63THaa3WSz38db8gR7gk4rmarkuj8e7uTue9ElsCpKbJ0bMsRmN9lxodkPWvKOZnlbJaTkduBQy%2FNLxmuuf7yBBWM10wVALDfeiMY5hWw8ZMDKG5HDsrHM8oH%2BAxsO4DifLnbFAFqFzLKj9kevEGXr4Lz24gNmqOEQ8zPosMjEZ6aJgqxt39gFOmSC7mahn18IRwCNFxnjipTcb27DG%2BK%2FcmgG8olNGKqH4O458tMkxjgNU5UNOlY0AfiVTCJNj%2F5uG1EKqTiXQGtNxY1LLpczdlzSly%2BZtgDo%2FhQmdoVM9vZI3vUs7vqeneLjHASVEnit8ORjBAnoEEBMScbGqMIiMuMAGOqUBhE29OBrfLl2sYcwJv%2B9L3TZfCGv%2BSHVYDxD5QF%2BcF8S5Ps4fPMhpPji%2FP1TLLVHEXHFJWzU6HMBwHQkPPz2jUENG6I1t8B6Ok7SAA31mVf13EWAs27NKOWjscyCARjXcE94OS1wc%2F4eNm8HwB%2B5sErTRGvhAmcOt7lffglrzk%2FaeJz5wHP8gEoF%2BPW2oRwSU25Sl%2B2TKH0G0aD1yIM62zkZieRax&X-Amz-Signature=7e65a8f869a03fbd1b482dab5a0ed5f70a8998ea911987b650d700a96593d0c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
