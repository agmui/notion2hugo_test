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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4X7DGCJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC7PpzOEXmaU6i%2FlNEge0be7st15t0TYWWt466Al3OEwQIhALdLgJWtTbW4zKev%2FCVzBU9Ki5ptPbqbR3jWNrIzwsT4Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyP4ClZ5g4SXcyVx1cq3APCd87ha%2FxsOqapxFe9bbdmIBdKTrAQKVui13bQQaPkFh3qiUZT2yjmIdoIi1lhkjrYnHc7qn4rNp4VyjSQjjQIpt4FJ8D7ga8c55PbYruBLs%2BZMUIKNWPHrqVeP59rieFo1BAnPtq8InLVdwkyU8JQdWGeNe6Nr3WZcsPYGmoHihA6ZTIPHqYM9zmFI0%2B2vIrYddzEKm64G3263PFxJ3Vf04vjqRLn0yWsLAsEeGnr%2FxVJUMumC0kZtqPfijCsdxWZjAYTXV1BDZe4r3JNpkT0AIwaq0p8H90bBALvqJSvssoAIaR2a9a%2BoHYy%2BdE2PqF4oc6%2FARXOu9D2As%2B3NGvSrMB5BIJtk2NAqERklBu5TJlwh0BLWb89962v8EJ6%2F1lpj8EshJf4ZUc144JNKQypBaNsQBkf1K%2BWiC3wMw3XmV8mpFsHxqTPGb0q7LQiVhXMVk6ZHqCHVt56E6KSbBwnV2vlWINrGAPm1fFddwnZ%2F0jqbwAE53%2B8sdM9MJDxtb9CF9V%2B%2B4pVrfvQ%2BsAydO4%2BuYlskj0Muodrwt1%2BLAROxHQFk6nNad9tkxs1GhxruQ1HP8SENTGcGjxcGOnOry6W3y9sjf08Osob2XnOpDVJhhfZz9cUy1NF2FPkQzDwnc%2FBBjqkAX9KV3Ymk2cGsfTvL3eJX2PaDEUPyuDv%2Fud0rqQmZyajt63z2oRqDG5Vo2s15S6YApf7586jAxJ6mf%2BinFqtOhwfnGEhoT24DBnJz0EJK7TfFFSgV8zXWXxW3c1KFgUt4pzXMEh2fkP9%2FfK61uaJ3jL1eyndfwjzEbPacxhd90eFXU5IyD5ETlkC6%2F4frxxm6Xw7vzNZMjos5eiWO%2FIzYA76NM7M&X-Amz-Signature=1cea409565584d73d9de8f830a87067185fff9656b5d3f779f71872077199d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
