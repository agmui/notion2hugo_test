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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KAOWTOZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDYT%2Bs1bqnMNDd1cMkrzKotE%2BffTtxNWtybRy%2FEy%2FdyhgIhANVvT9Mc%2BsO5BBAMmmjCXGvezuxDEGUHB6xAUVvwq7erKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCgKYToThjwOMTOeEq3AMrpcl9NTaEZRv%2FzU0hKWOVYPkckoX2OxykO4PUX3aGmAxoKwsTeOO6j1NzomIqo8aNQ656mqd%2BBYVQj%2BTtYkc2JhWAAKHqZrc%2BFc0HvzV2bXzQtoxmbM5sfwMi%2FHl%2FySuV12cvLC%2FKfV8dIt3%2FkOdM8fg1%2FwxGAwwzPMJo4gWKi1XQnCxmli2O51IvFoNs7KoF%2FlmkEZRDVMDkgFwFE5%2BQyaCknvMS2T8HCADpjLCioy3gTqUqEgtRE1XBkK28KF9dNv%2BFJZb4MNfUTLHqF2krUiQu0eiCR%2Fiw9uP6KOUOzaExBOUSI25ZSU7MKSsFGN7Y%2F9MfkwsF1jzCg0DCxVSfTDZokpRW1dXM0BeV4Y3Xe%2B%2BqNVF6R1mjixbwZY6%2BmSevKQ8fgajX8bmsxthXQdHW%2Bt0LG5FCUSi825SYGve3qoexgaGkXKVLpAiseQvq75pczKq6mFnuD9LMvBeaVGxfH57qK7CQE5wmjWno%2BwHZ3vv80idCUDcyF7etJ5dKj3%2FPO1vestacNt7GQxh0%2BgHNCQECXttEAJjrho%2FCjBCfpJw3bs1XTPRyNlSjMXnw9BBJ6PauOfh9y4B%2F9JsAZi5bqip3KHA7tkY9IntOOxfuQtG%2FxIgWd0OZ7ryqiDCdvOa%2FBjqkAcxiwwupm68KtQrX%2B3TZmseYWbjEwMg3Kbwrha10PhDi9Zu89kIN1krFxWTKWsiDr9Us74qObwF7V16hAlmgyJtHFD7b4JDR3QmKr%2F%2BIFH2%2FpPoW1Qjjq6Ls3CsRi%2BF%2FP5nQfAgQeuiaPcHK4uWBL7xUDUjphE4QDdZlbYS4qdxvknCIEdq5FcfFU%2B9LyWZp1lXN7JgyDhYd1d%2BMpXBp4uboL1yA&X-Amz-Signature=80fdbd5ad22ad30d7e14da617a1e8ffa628fc001328174dc33198557e4dd2b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
