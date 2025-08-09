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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJXUMLU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4fcLgni5SknIUmwiQRUL3pa74oRAVBCRkXG6U6q9eqAiBv9y9J3W6DUA60LQXvmgcBGZDKKhopk0nDo4A1EzzN5CqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqrj1NeVcTuf7b7UnKtwD0cSxC1%2BeqjcBPkbpVnzlwE7GIcj4umj4PHUShqM729%2FvjBZH1CAukbgOF%2FXkt7ENftDjy7eUeTzGKxz1kzJbsi8Z03eEnhfIBIj9ZkL3t7D1M1w9%2FTymCRDzOje2LgxKzz0KlZ3PCAiebx5R%2FEw0uZ1ORteEPqkFEDs6dH9zltNjynCh3TopRfVmWTyuXlVMI62MVAXaEZsRzLHT%2B2ra5EifvzWurwr0fezDtDrZvLttw%2BQA1U7p31vyJ6WGeFne2S3bYwQwml0dzmiMTCQSU4Ru%2BGvgQ%2FcZPT3G6KCuxxyUv1cl46ZGTsXQt%2FTdNOwp4bBcEWhniXcsn3RMhFJgcLWpka7N33jWpORCTgxZNtCaiiDlEllshUQdpn8N%2BqVNCR9rxS6wJOWRpnJadOqu3XuqX2qnEYhI1m%2FQL018HguoAiPcJKvISvm1HW2qpCoFnYNC%2Ft0C4COTHXW5HH95T6Ag06KZEKrw%2BrOkBpArk5EYMcBWtY2DVUM9Xw0gF1EkZLODKWbBaDgcicDHnq9yepbYPft%2BjQXTK%2F4j5sCR%2FNOWC5pQtaM3CYtXuyXtRiHujqK5Lm4LDj965N7jxG%2FP7GiJxqoSM8xv99ud%2BwGaYCn2%2BhdCSSY2IGb3rk4w74rfxAY6pgHd%2BwAxAy7w1ejgx91KcJUpPkIr1vSSz%2FiOeq0uToVbCBgy%2FIoy5oizw7FznwIj08egZ5M17QDP%2FeRPIbO7vJc6I1WFgwOzRtmmtuJEnQ4dpKU5f9f3wJDb9fQHcMs4Ha0i8tTKug4V5GXh0wthiFhIgua%2Bl7S337DhhfgcqwVlmjikHzyC0fVDBTQtVwTKgLsTGroELVF8k7gOg6rt0hYXE8PoYwki&X-Amz-Signature=441d7f7b52a50d7a100f82e354b4af7033ac2895d06dca192bd530ff4c6b75fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
