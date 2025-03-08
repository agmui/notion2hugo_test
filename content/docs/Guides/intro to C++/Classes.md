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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNA4FHC%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIBETHrndGaZiL%2FRXjvkszvqMg6IyjCxXrX%2F1O5zXxgidAiBiRZQpYRBSG6RZQjftkc%2FCbPgyzTRwyIZKKbR%2ByoordSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMJoElhqG5UNyxAL7EKtwDx0LuwX9GCi8%2BHwrxyqC2U5fL2NLosrLIR%2F77uKmQR7WkTV8EauhIayoBKOQpjPZxB64zfU9USyiYpi2UEKu%2B02a0gJdBM%2BEYdJFMdgZvf3AvO2yrdzdZFBtTqJvkGal7fGH6xsYf4wBNJ9PlvDQ5nQ%2BLIXb%2Bko1gU9fO9XB%2BUeWs6rVa6A%2FW9LaTi8Wvr%2FRElm8RMCIZFPzlSBLKUC9%2BpeB6kdaHxU5F0Iyzo2MjjXSKvzV3INVOxBvB1Vn25TM13h9X7mpo7W3ghLSUXBYZpHVJoBac0nxXq%2BbZ9honHnQd%2B350xeBb1MfYIyCrSAOxNIyC7QPJFrADiHt01IeUAXuxn%2BnhgHcNaQqpz6dgrzCfT2Uzx0gm1KwskZwnq4UGHB0IHuceHa5f1ZGXn%2BNoc3C5plpvXu41Cn7EHZZIlAuDuuaqU4vJkv%2FHengIUPNxYJqRAg2v30oOBRKFiEu6kWx9W5oh0LCB3lZb05Bq6cC2oOjj2ZkzzToeGA9kjmfXrVKouvGTprvez8txErNiXRDZEtW8nVQ0KQ5JvAx7tO6gDqzWcnaK7%2F9qU8o5vT5YF0fR9KfyopQPtvCr%2FODYaherrFMCkXd3MFCCmYwyT%2FOPHdytQdzGy6DDMEYwsuCvvgY6pgGFKEf96%2BEVqvjuQxrcLaGqZJG%2Bgj1%2F%2F7EsmubUhIgPw6gfNZsrCwOx5l7gzq7NbtT8Z4%2F%2F5ULlNrYHPsP2mfvIVRnVN%2B5YFgM3MddsxZyUM8dt76Kwq2Ekf1frX1O3hehgv8sVEzVQRjiMNaSbdh6bAlIce0RVDbyo%2Br8QZGKn4DBAiGiF%2BFP1mv2G3ubqYaSYsYvpWgTSfDj5qXmqZ6CLyDk2wB3t&X-Amz-Signature=842a2394647352ac30ed3733b3c8ab345cebc1072106c4ace0199aa0f46ad411&X-Amz-SignedHeaders=host&x-id=GetObject)

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
