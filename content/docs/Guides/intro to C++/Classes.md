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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWECPREY%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIEf4kNQMAHG6jmpOEEaU6Tib4LCPKmqwIQCvcc%2BLCTrDAiEAzdVNndh1YelJJfT24Aw2CKdp5ryVL%2BbSjaFFd3A%2Be8wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFsc9X0yxw0D1qKEUyrcAw0D2ao4ezO7CsGMGFeAVcl4yNShtTafJCdRuVWqraGwAbegnkMjysjNwFEFnOAzEOJfbyuvk4y5mibXfR0SHu6l4kaxh7a%2BERKom66w3ycFuA4zoeXJkloK36DEPEXNNvyc0bHM9ai%2BCq6ZdqYXw7wGleFjgLkaBEoYRfIeKdGgDoBoNx0aJkRRhTk0UmiTzSyFYLyC2KcFVb8yXyZlUnhgtlk2baqB9ST079uUbvWl8cMYMly0rsEzztBbKTPuOJDFBQuCoDVSG%2F%2Fc%2FbRzESpEc46fhUiET8Uqgt78JOQlyyhVvtXeFqFeMnAs%2FquIG8UMEFh6tYZSgi1nkjPhVYxncEkPFdVxALGXZDuRjJ3TFm3cTWfHAOwvgNwhVQITAPr9Gdboz5y7QZRZqdVdBbGUnQ%2Bl11Ccn%2BZwh9WYLznYjlqaGNUFkSGxCOUg%2FqQ%2FwvjJx5o6IJyzhCtTAgc1sQYQAkZpqnJG5GbZsc%2BzlUlUtbdvCeRHqqpM4q1sMwGbTTlwNqhi9Avk5G9fva2DjRvI7JcE8rNUN98JG%2BcpXvDKawz0%2Bj8lVpHXuQ%2FSeMT0z7vAsM6dGdJZL6QTYTnwdXweiYJMdttxACtwxhNRoE0F25YET28nmTK%2BUawfMO%2BLjb0GOqUBkxk2BS00mfE6r%2BkSWm8KkzByIuk9pp9TyNCGYr%2B1lrzsF3es8NhnF32S0UswUDj1K3RJeklXp5tlL5YjgL0%2FromiwvqgfZxUQ%2FLzExu%2BeHuY51or2BERULZUrtxK4u8DHnP4R6LXGC2u0wxBofQsauKI82mAIoEl3oTYqJkFlWwwIJdFVnzsHGUzOhwNQOcbLVf8cE5KgAu4DL4plabrNzUPZhgA&X-Amz-Signature=f0c58fb9623fe9d7f8c314fa0ed4192ce41849226b5abfbf20fcec45f57505eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
