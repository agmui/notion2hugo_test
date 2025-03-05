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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFSC5EZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkG8rrT%2Fb57FGwRMOxB2T%2BB7sNzw8rhsWz1VGsMEhEHAiATD0Hanq9EzOAHzfCVtUI5mwYSaQ3OQkCnlG5qQFdMRyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmQ1eZBGVwaMRGFVoKtwDtdHVG0fQd9Qwz5WLKHkxhSs70%2BQO6ucVur8090wWd4wG3xR1JPV4YzwjfvIUPEzKpVJAMSUDeoB1FqAZB9iYvm5DUlgPHqEwgKuKXwClaDc88aMGDPUZE7B3lIDNE9VBLkXdeoFX7kLMFidWk69Ef07ghm9z5Ke7ksxF7ymg%2BrGT8Jrc2FBxlQuN1EneUTbYWcpTLEmWXib3c71Gy5jKW0tc3VT7Z1aloDj5qVs5MVHHHpnvR8oduJE3Va1c7lDshhBnVbKRIs8K1EYod7ihGBR3fqqXKc8pWWuAgGGABrqN%2FNeiko3GYmrontvwCj3O6rUwx3ulqNuQsrL4oB916S0e6mhl9xKUQrZZlDQvn5wFX91d5XlkFcBMtXhlPfqLSoAMK8y8c%2FjM8ZLIVcWmNFECW%2B8L3mvOzHJ6BixQm3YcJxwGTTTncMtUgbxGttheEZ%2Br69tjs%2FOItdIFe5sDQYkTIPkzuBLTTnBIC3cM3e%2FZSQJkWNnZurdkQosP8SCMj6pdd85Fsabl5QcudsiQAYUEgok4je4wmAMS%2FPf1mbL9yyGUaK2nZAEfbo2QDDtA%2F3G7DbCCAAFBQSC9v32Lf9j83IbnjzTu18c7wnCQiJXB7oFR5H3f14kNAQQwheqfvgY6pgF%2B70UFHLbLtcH08qvKCeOhUdrbzGfQ4D0itz%2F4SgaW26XEnNvoDduiudsYNIlDMSGTQhz4eSRjdLr7xTAfMv55t1k%2BIQQR%2F95skP4FeFVKaslVH0wsGJeyYbg1DeM0E6v4UVAVPDqgSEWRzkg4ABVVKVySnSEfXUnaFPJl3SjMZ402YD821NAw0ooayWV8GVzU1B4GL7y6SKNN0yRfjD4%2FPac%2FXkD5&X-Amz-Signature=fa2d9409be784327dd0c553c398160d971d1a0698791f5b89a98c67ba471e668&X-Amz-SignedHeaders=host&x-id=GetObject)

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
