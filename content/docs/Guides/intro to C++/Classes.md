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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4EVXUA%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIH1KbzxyTxL5E%2F%2Fru7o7tIdxEsnvNbXIMjs8a8XcJMasAiA40gDRJCf746nIMDgxsD58SR0c1JwH8mfqtpcoUzixJCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQnJE0Y8wA4Uj%2BeKSKtwD3u3IlzpyzxUW7Tth9ksrFgzLGpoChPr%2BTNV20fzCyxMiRqDumHLsmTEAfb0jKnca23PX%2FCXeaQHb2lHtdNQA1ntU5cawHlpjrMR4Wj%2FqztA2Lr8nly5n4%2BfLQFiKkgXSBsnE4hVXVJvOS7dYqxLLBH1r3J1wyR5ON0dc2edHpTTcyXy2qFrbeYA8wlWCLV3D2KW3RqlkNGZOyWlS1YTG8DrFPBP%2FaM0zs%2BXIjC8IdIVvu%2BCGp8R0ZBGFOd4wwoFzQ7m0Hssa%2F5wNP8Qb22ad6Io4endzQOyJqBmXe5GpMHMTaSeQQek2t3luvxPWuYrQtZwQReCajaC2Q2uOK8VNzfjxrviQaV%2FuM%2BFxqEpcDTrz6nNglaPRYE1Xa6teNEM%2B8JFLHWQiwE0wlF0lZqeAJtcpYVVt9n1Ibi5kxS9RqSShyYMQs7XFj%2Fp7K3VN4XeeRq6unlWWHoh4vI%2FwClsKR%2FqFIPnPjees1Ie7cBrjEIzhPgKTa3i3HSenUZ748%2BtcGIwUr3s3FrG2T%2BHR74fEQJa4yqIysAqybpBqqMlRdnB9a%2BQbrRgGT17LtKT28zKjaIY3VtKznKXU5dihrKA%2FYED6rzhGkvyuXdjaQUgPIOEfjM26JU8IBl5Kb8kwl8m6vgY6pgEV4UFm9Iaf2pOgHwq0JAI7MeSvFfjN7bzHF8SNvHciVBXNrWJNCwhOu75%2FNa4AAXgRvBf3tOTH2eeMvcZBKOvOK7Cut615k3amAOtvwrG4fC2LLpMnIW4GJwdKX5CZ1jziumzryiCD3TxvJRlImC650NkIfYL8UdVZfE33Vc9MDUjInxdfdiFL%2Blq8pZ4puWdXTTmmKZjT8Yqp8hJwf0Aa4Ppk6ZfI&X-Amz-Signature=fa52cfafaa75e9ae3d3ded9e088c9f2a057828885e79bfdd39dfd68c101287de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
