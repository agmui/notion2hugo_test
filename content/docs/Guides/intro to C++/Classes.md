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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627FPE3EG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCXnN8LgV0Ig7E1iTDKXi99UoTdhCVQWqf67C505rd1DAIhAKI6EcArHjYAI0QOnkIRAbcjPzwg03qCtN8ZxGFp3%2BdsKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkp0Vl4pFv1CiQo3Iq3AO3NgVdFuN3dVfC9A1%2B0qQPELd91xrcCLsdMro6MkZUapsIP%2BVG6XAmMpP053W%2B%2F5X6oTw5CiA2HgqgwSY%2BmqJwn%2FrauefTmSdiwmf8%2FyYAvsJm9pVBx9CX7jdrb7qrTAHeWoj7DJRB71ffKvuNjnNtwY4EUcEIu65rTG73p39AwLRxtVubqGDL0PZU0kSKPFdo3DaP61gfNWw8yZX5zF6OftPBbOviFjvrSCM6bT2oC%2FQITbqeiN83Rbv%2FcEeG1WgjkOZ5EmADisgxP7YIvLX3uTFUUR4kbYxJ7NYMHxcQlzbRXxYiX81hts%2FKnXzkdNgq2flTziQo5asA5x0Vgns1Ay2vIvpFCQI4BB368C0P9X%2FEWIdxMle5nx6QWrZdwf4WQHVQ30FjsztdMI5hLbIE1mPCBRx%2FLcBJ5tk%2FZHPhhFGyGGM9UaZzJaZJMqvH8ZfspLROvkEK4k5Zau43CF%2B1t7qCrVVuNYkDxWfna7t6ph7PX3d1KrOl4DKP0%2FOnj2HcBH3UliqmFpxYhjXKta6f%2BRNUVeIoVdexkA%2Fghdk%2F57IoUJA9YBVEy4Br0WT0ElfQaEdwQwpek0c8KxHXxC1HWHyRhR7GR6jd8tDeFMxDBN%2BjPllRy428jpWNzDCFo%2BjDBjqkAQL0%2BgvfnrOKoKDHnuPE3TdJT1r%2Bwhf77OKjIo30P9y7J0n8zW8ajbU5WVEkBK5BsJr7FOtI9jjarACPFi%2FPSz6%2BkFNzc14NXqwTIkzo7LBKDFRW1rd0oTve6STtXHaaoBW8GRazg6MdpVYsLxmOhRNSKz3uzu2cQCPU4xnmOc7R9tohoh%2BjNxlxy35IKvvLdZtBk%2Bwd%2BA9zqGHPhBjcDTwRKo3A&X-Amz-Signature=a7b9f9e34bff5483be36514be3d6166aa2752bcc1210d4eb425fb6190521f6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
