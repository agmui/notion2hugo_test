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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ROEJPC%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpJ49wJwLMbU%2BsPWhDhaJtjXm6PqsuYN%2By36KXowmeywIgSd1oKztEM0asY%2BB%2BQuVozg60G05EAjZ2KQglIbORtyEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjsEqB10RWHFRUvCyrcA7SjtBgV%2BAxi09%2BxtC404P8rcmzwWbqStwADYOyor8O187LKSPYbpMZsEYGCctkUDv3f%2Fahig1fVfjr7FtWiZeLJLqSwevyZJYkpY8zzhhOJfdRkUv5E8MqoiY%2FYRJck9GhiTKYP1WbRdJyTIvXFdy2O4dB%2FzMMV%2F7E5WqcHg6dZWPy2AEuK355QzemV%2B7d0Xzio%2FmTwT%2BbyBt9ABWOeNO%2FJul%2B3lqx%2BCAc%2BZPgk3hG027L1ko6JLi%2FJfCNkKqPNUsGiP9W5lygwCb2k3dkLTl7T6zKOF4obAj0bkPsKOGYObJvUELerHoutp%2B%2B3TMXG8tKR63wxp8vZ5xNYnyQl8jm2QKmzrNwinIhPHz%2BwUUaazYk01DQvHk3WW%2BocssDppy6xA7RRmCrRdYCA2Wptow%2FW8knGVvDl2TdMv9NahfkBbqAjEWdV1wqSMfSLeGnLVbREqtgE7sMTGKh1sjamjKlva18KffNIc%2BDKSy3ur4%2FVTk8GlvUkOCL%2FzB599Rw2gFRvVJMDxU%2FIlDkOiISaLMT1PO54UZpoTX5gQUhQPVNIobRynQnUvO%2B6pz0uUCCl9PhxVTBXNqVFZCZ63rPaj9QUCcsufoBlGS%2BrvUE7ReionS0SymMkZmO%2F%2Fo2zMKPLq8QGOqUB14ZTPDF%2B3%2Fxg03ByoWH1yE9rFXIbqghglj4sQAOA9cC%2FplT4ZOzsE91Z1gLXIzRb2zhg3XIws87GpuOqd9oZIYFhPtBvWsRr0Zo4xaYLMGGssipbqVIUEstPDV1kRr62EIgKkhPa1r3So7QMZdhc7wtqCQrhV7ZKtCbR43Y9RTkJ0ez%2FeckNFSs0NLMd1REdDCZAxnKPzLWzvrjBNJtbkVT0Imat&X-Amz-Signature=dc91f8f18ff35cb28ae9000d4e48fb661aa1ad1258607d7a445259a6c4d7c690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
