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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDMDWJ2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCjWJPNWFj%2BApiqCpZ6RtXCpcZ7pjEeXresYk00BWSekwIhAKVWZy6rtDoeyt54TKzmfsaoYn%2BzP21LgEZhxkdMjLNfKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJyZkZevQWrwjqxCMq3APr7posBCoGEgIVUFbjHXLiF%2FTnfwgy2IVhY7eX7JoyhP6lIDw5NCAim%2BehOAn%2FwvuJdQ7dx0Ue5kmsS%2B%2FjGU3H8Y3RxLjg27UBYxizmr%2FG%2Bx8PE2kAPlXko7dF1miek%2B65E%2FyDfuTRF2M2xSzQ%2BUapBpw%2FlGxwDhxD%2BnaZ3zHtPhrUMeXmxpqaVaXvOSQOqkpelTvfSOzJcvBp6kIqpxpO21nErEalG7M2i3fo7q4YjtEaU8VjqnQ5EXWcZZ7Ae0iG4V9PJQOncGjIq6Gs%2FdUeJKdD3SayS%2B9ogomch%2FdVIXKukWrCjY%2B3LOoZtin9rr5Iyw7T95G6vdERrNhcQdIywrk53%2BiP1dl0IeBur6Me7ikizUZG%2BwPF1M%2BIAtLP%2FQHe4cch70e4iWJh2UJXTwi5iNrhKi4ZtEITWAF2Kud8RJ95CzaTmOZC2s8XTuKyGZZQ9ldI5qZQVkUwS60co6cezyPcGhROEcxzOWfvs4q5DgM3gLfqXEqluT%2B0LSiRI5eTkH332liYveOOgZc1lhq8iT166kJIM1xn%2B3Qk%2FgtLljkhXsYq8kGNGMFAz7ZwkJE9t07NJYZprodh8prz1OZMrKkfOUdFYJZQ1Z%2FqIV3zrFaUGvvrXiwL6E5T1TCy3%2FDBBjqkARdLzy7XQqEgTAo0rI5zNy6SCrZ%2BFbfy9H9N3gG8cOdupLrwbQHiSElGePa%2FW55gvpiOI6yqq1JTEtWvT4%2BKwGkAamkph2zdtwhGQ%2BbX98U1ySfqmmIvFoI2kzPcRvlUwRpjYmjUZqMw5yldYgr5nQZ45SzoqjMvzMpiTN14qkTHLSfv0zR2JfzVPHdU5jY98byEgrg6JWIEam6WIYgjRK3QoOtf&X-Amz-Signature=31b32a416c7ba69a1788661dd7cada8cf9cf883c617abe467d92fc088d1bb0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
