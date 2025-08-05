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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77AHM43%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAW%2FTbrzFUvUjpVdj4giPtDy%2FkV1NoKRNMuMRqa8gTIwAiBJDSWGdnPjUOtOwlxLjUECQLTa8Lql8JHC9uoJsPY6cSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMP%2BWup0IXfyagAdYjKtwDu%2FBiDp%2F9b6X9WvTROM%2BRTnefTZpJK3yLXzgZSSsfX%2FN03ImHiZfNXnPVjnAQmU0if8t%2Fu0uWRKvem1pmHFnhEPOJMD3jdiGtWjrzjhNvvVF723HUOjm4KoPcoIf2xKYeAyihckc1c76w9uUAmHiULTZJcrJ91WLxcuN56cNV5cQocmKwNvJpAvdXtGlTP7OEqk99WIzWgNw5EoGWP6OEY9dnnGRcdCkvDldmm76LlsIyeQ2gU42L9rPKGTT9OySBHztytjaboLKrQT4jiKOX0LZPrjKeFybftS%2FpHbF4%2BGxlG9ssq%2F1sQi3F7TEGZefe7lhqqK8hQuqPJ7gjFEynse1Zm5chvnW0iGvoYXjGod9kyY2uDYtXtkJdfIPEg9TDy2rlCM7VfAiD3AUPNneli9VoLJ0UrX3rSepcrWEz71tfjOpXcjmlhsV1E%2Fm%2FyQDordB4Eo5XIEPlH31AtoEw3%2B5CMKkYe6BvlMI3%2B2L3A0QzCagVuFXNBd%2B0z10AbyIjH2Wh3HAC0MvHqxzNYri%2BlNVy5bw1tVAPAq5XNfL3r3drQwpzEuraWjW7sMngkG8ZRRKrEADa380QH4rXiOIlgQvCMBR6tP3cMFdm%2BNXjTUZrttzkan0QRyD3uTIwroTIxAY6pgH%2BwS203Fsvgd62ZnIPB%2FMh9q%2B4%2F22iBrz9MsHtkO2ynySbilXrU94op1snoRBRsJrCtgbSj%2FcFE1D7xQUoQTS2MqKawDHkZkNrEclGszR1OyAaO%2BvxxsQ1J9XAiDzihtmFnaGPwGQHtgNj8uxbxwVbfO5TkOzA7f2cwxcBdKojkQx%2FBllBJYbRQvrlWVuspL4zYIHyOjjj97aP4mb2ZqSjCMLWD2oC&X-Amz-Signature=d4d3304d2b0518d48a3e62ab330bcd33ffc04c5c543b2c108035e77658feff9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
