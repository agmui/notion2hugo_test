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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624ATNUFW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW4SlIuVSIf1YNz2lhHJJC6JUffTzNQbm8Y502qE9Q6QIgBjaIPlgNtRvq27qdUkrLevpnTS7TdGJYUYFvecL30AAqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNss%2BkiFtLZvpAqFrSrcA51%2BUcFQxnFvyCDYvd4nW2rqzlrCRNogY8lKnZ4m1%2BL%2BfJX%2FSGuojp2gzDY8GFFSi2FZraWfJDv%2Bx4%2FraxyJIPlzR%2FGhFvhjPtgyweDywIss2OmSBIyyCvM47zJmp560h1aIuLNy2fEhdJZxrkwiBXcKAUTuxNQo8evFy%2FIw8AIFpUxA4LkR53tFhZDypfwB%2Baix%2FdZPwgJsxsnUQV0bcrQTwehkW1GbPXp56ODBTfoNx6VEn8mvP1r4XLJreuyeRcTt6J5HwqUVzeDl8O0H8bwLID2bZndXmBF2Qdqi0T2rjzeURzZIJZ3eY70YEq%2Bd86wjRw%2BlMOoFLnrf9EWi%2FOWONxDqvcjkCCNvD2jOpaUIzKOm%2BIY9BYyJCvpIlG%2Fd4uDNRS7rRdVoYMnxNkKyc%2BnWvXXXR8Rh3vDJyj6d%2Bvef%2F7ZivrFw1xUoVp09iMNrZgfD9tawv5igxGbByJ9F7FMRvmnEsozEZEYB6ZemPtqbeppgdp3Ru14m207c%2FWh7Xt1F3%2Bp%2B7mEoQA4SM2zByuVkwxwDfxNmk5H%2FR29GZvsQPKtxcR%2BcX2cOL6Rym6aJmE18bU0Llbp4%2BtXYhyoR0GhPa398Mt2JNLbGFcKLSd9DsZeU%2BvZlE9rC7q0lMPjhrcEGOqUBK8%2FJolFXl0Tg0KVVdEVQXCliDBrHMrKb5J%2BlMQJU9BfaB15yxxFgdSR2wdem3bOfogrZIA%2BvHSoztjLGHzHFA%2BVVBER0gmcMJwnr7pGayPLHodm%2F%2BQ3MyUF4M4m%2B0J%2BPqYeWITai6eqegqPsO0fKaX3ZQI2Jvq7e5pU2RK%2BL4vds2XzTQ6lgGwEobMSr5jg6g%2Bid0Jm%2FLNn611K62yY%2B2GLRGuqw&X-Amz-Signature=58b4a8866e5b1dcee072db1d81939ca3cb6b0e7659347df65d8d8f87ebfe98f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
