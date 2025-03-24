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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QDDH3D%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZVWuO1wNmezyE5zdmSVHQ0Xry7QF1J59bPYhxiz%2FJuAIhAMyGO9OHfNTxzwAwDU91bgDLxBANt%2B9wz2yuqUwEQ%2BHjKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwivXXqf0nykM64BY8q3AMGZ3zNnLZ0hj%2FlvZznzdTkzuC5j1Jgc6BasPy5GOVp0cLFX0jVaTaB4zC9%2FxGX%2BR8QpYkNGsyyUgJQYqMTwJn64G13YwfD9%2FR2me%2Bv08HrZHDeIJk9MVW2N2x20n7d9AZ%2F5jRGijymWBoGRBak%2FMBfVdLa4o5h%2BWt39kA6mCXV0ZIArNull6IQTmFB%2FvisEncAUOT0wG0U2GEwvVAYx0bi2hUcVY%2BB1LZx1FxJu4lt7%2BVrmYNpYjZaiiWKfbDCqGiEI5u2OHNCv3eVNK07aK0FT08UItc68DziePenDjfrLuI6YJotoklIE8PhdPJa8Nizkde7JAtdJcfxpqNAe8pGUO9oHxpAJUbwkNZAnRcP9vztoetNkAwcGKHPKigVQqrmCoSNekQLUIz4HxCoLlPtrNPFagFJsFzf2IUF652L1SNU96nF1%2Flzd%2BQThgasDhFeGDQl4gOgSpNp76pNK%2Fv2HpxT1hsULAjucjO%2FZcaeu4iCKGOWdsi3unu6VufrlJINZsp4U%2B3JRNxrnSrWWK1g%2FUF0kfs31CJeBZwAizqbY9LIFCXlkf9b7Ln149oEzW3q%2FN%2BEDA%2BnGb%2FwWBpIh2731ARp9uPE2lKWhzYRAkQ5caOXQv55%2F2dwbeJ6YzDJ44O%2FBjqkAfUoAz02rucczqfvOc%2FD67d7EabyxEdpMJi3GZJn2wSWrz3H4tN0xX8UXYJJq%2By0FcEF29RJsZEpaxSYpnrxrMuQ7IcUr3zHM1YfIreQqSqSmU9EdyOpygOxjXOFecebC%2Bg%2B5Fr8VLZFi6lgN2GElAZQC%2BALnHe6LxqL2fhKRZ5CwDpdOESAybea45acZrc4skewfeZ9XHH9WJkNEBh2n3W41lp6&X-Amz-Signature=3ba2ca8564a06ba294055b90bde5cc554a2152c3a4b6f6a1f69370a20ddd9c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
