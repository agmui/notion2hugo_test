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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSO4OTRR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCaEFCHhBD3KJdljpQ%2BV9H3Qe1oR91ii0YqK87xDSOo%2BwIhANElX3KAKH0YihqzTBr14e56KkcTOElf7JHIrV24B78vKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw7LmPkSUVkyCB%2B5Iq3ANP4fkFiqSbQACa5eN3%2BELPrYCP7UOHSb6L7hi%2BNAL7QJWlFA68lBeXKHEztJ5a0s%2F3lNV0mWrJ6gR3ugZHZpk608Z94rTRmCwoC%2BHmliQaLgq4a%2Bp7Jw9So24qN7UjEY4ntWr1P%2BHEabX12JR3r2rcWFvRqxGzITb%2FGIzuX1rcHJECoaU9sdq6EILI8MnuY0%2BONHRuZELnpUxJ0n8Ysv3td4ylUxZGdiisnXeB%2BriAKJLzGQVHVugWfKNWqAeqam5x4RIw9DH4cPqiod6GMTs%2Bj60AkwvvLFytE%2BGPCuLP0gGthtnya%2F%2FBfUOlQ1Nr4LxZWZP52Pn5JV2AiDl89uCZ0exRbykaeUMjise8%2BYZDt%2BooyQMk7HM7MkhNMpB8vy499QeSfZDFJgm4o8nmRm2TIi4R3Xrf5Ei15rOWDaKi0byiPvAxJ%2FfyoH82tz3Ew6TAM8uVyfxsyBzJcn8vFJnngB47INq3WaVmfiWoH1Pc9LkExmNtBl4lk0WGNaI88cLXHVi0oayfJBeBicart77yKrqyIX8qtr9dzdZ7duO6oaVIcKxGHhms4dUA1xnlSkkJni7DPastkWZMmB578%2BGK34cqiUuY6tqC8iEHez3jHt9N70hKWYH0CfRipzDGtKHEBjqkAdQ1MZfavTAWSjuDChrilq8d56dpqN8lq60ZNhXwHjiygiLE21%2Fnym8tNKeFfBlNYIatWowIAGeI4lx3seHwX0M8iqjDdI2eKt%2B4%2B3jxV7LggjB7E%2F0mCSNDvg%2BiMrr9WM8uv63wZGkDa2Uz3I4GFG2KYF47zjlcJNaZuJqr4rrdPeM6myc1jSMl8Sp4U2fAVOCjyI7v0SIFdowQN8bWZwolhr%2Bt&X-Amz-Signature=67435e1ef3bef3a3c6350fb32b93c96c759677839732abed2f0175a670e6ed2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
