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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTG4JRB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4nEMofHXwJe%2Fm2ZaBqcbZThMOtDM3KbCLvRnOZmcXzAiBDqK%2FeiKLv%2FZQG7g80O61h9nB2rBkHig7oL9v4sYq%2FSir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM%2FwoPs9%2BNX6%2FVu6QJKtwD8K%2BdpfxcUk%2Fc85%2FCPcu5foOOrpFQeVg7alQRCzrf1JBf8Spm6kwyu%2BX95AhnTH0JzhEL7ouEE5DsxzPoyhqGMjS6wwy8RNkZFsP6UbeeFJ2kJ936qT84qqAN72T%2BAJw9aC0BwM%2BfrGmuR1Tk%2BspuAFSBY8yavk4eP%2B2D3%2B2H7eH8Benh6%2BPifZWJddUpbTv6HmkLP0WQapnzsB7odjgQ9i0X%2Fz7t0FWJSjBRbnRdtjscDRc0FK0TIQwrxWX%2BuyA5wNUI0DdVMvnys92OGP3FdLjjzxOPQ2TFBTEtIssRjEyuIJt1nF%2FOa9FjqKI7FQBp82KSeKn36XyHvEJ9xSWlPe1zPtmWH%2Fv9mXaIm3h7Nl1Bkm2cHgAxZbfzN8GyBmftlmvQEqlIloNHoTiojYkO2myX%2F8yNR9r6UmD%2Fb4ENkv3tSNN4iyr3fi3a1YT5hnYBXXl7bu5qmT2tr4%2F5TGCQwHO%2BBB%2Fj9ggok1Ca8iRz8NRVjNhsQJc4ox2yqD2PCQPTBTK%2F%2BEoLg4e2O%2Fydgnh442WzkZmdY1w%2FHJpFakw4BNL52romdLVDnRtn%2Fx2Q%2Bc%2FvVxXb54raeUzcvdXRi%2F27qqDy1gUiYI2kjTtuf6uklpwfcGj%2B7qSqUf8uM5ow8rywwAY6pgGMRs34SE8wH%2Fkele45hLOQ8sjfN7BXMv6Bnm2mILi36dcEXfaXro1YDSrv4wjT8WeCNMDHj%2Fht70oiwoap6CaidpIX5ZKkG2pqcKRF6S580%2FCt7e0KWyPkAaNm3b%2BolM607ddHcjdbwj3OEMpN%2BdgNecNuOu3ZQkaeVKTgb81PdE7C1DOWuNs5BkC1QkZ%2BbovVFfqgrww0IYZof0GYbdLZR9RbiIO4&X-Amz-Signature=657558dec38f304dcc9b86c6e77ad53a26b289946b659b7794232929651ea09f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
