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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653TWNOW6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDG1xfMLMGazi9Gry%2BYocaJOyeBkUEgG63k%2FUPfzopfegIhAKAr1%2BObwJEsNBGSQuhqMhWaXZhggQX%2Bp0DAyFiGCYxIKv8DCGwQABoMNjM3NDIzMTgzODA1IgwBLHsXzBE%2FFFTGwFkq3AOUytQ8jV8H%2Fcd7hQcPJ8A0ZpeyWlKEa%2Fhqqq6eZWfcmawwayFchxQrTo4hXdGZc22oD3lCkc56dRiprHlyaUqGsijIxhz51tWB%2BnjEwFdqPSkkab2S7NurV9OvehbQ%2BR3aNOz%2B2jM0WvanKSlVG5ApBi0HS0gSU7KpVsBiI2O9pcV8dM7eY1hc3bRCyXZCm4R8pr38l4BDXU3tdld%2F0nR3FClPqNGdLeDlTSsGuFLygmfYwumVQ1k07PJYLSBm0TPR8XUDzmTRpAESdQY4AOLfP5vIHA%2ByUMZKWUstSsC5g5VCiJgYq5y%2BYeo5w3EGJY408VIcMdkg5AlOOudot7AvmsZScbP%2BUbQ%2FKp8C%2BrBrFaNYVO%2FVCGZr8qjR5t6Ck9tZN%2FpjcSQ4EyIyHvb7RJmqM70XBb7%2BnourN3bvzBgw%2B6cLyJSXpBCBormoFGVD1CW7mAvWNBWusrkSuY9p6os%2B%2B9vA5gVmjFMsYsuT4w%2FW59pOhJIG22qd2Hl3Ea%2Bq7f69%2Fax%2BUiPNA941P81gdecJS1wl%2FLzLIgtS3GkC4DO8bsZa9x1Odbj7nm4cWFbZG0rxfjgcibbJSVf%2BufzeRjm7kz8ILlvQnjaAwMdJGwD9iQs8lBQ00pMagvAP3zCvysq9BjqkAcrRa1VI1Ch70tHKi3vVp0lyrtBJxtuLa1rRpZ9Gqvgy17Mq9YSi2s73cbzHMp1xTYb1PeyzgON0lZXjpQz%2FVAg%2FdbbwzMUTPg8xRMGgBso9%2BB4a9EiU9Q0Cp3jjcptPOJKrSCBgAN7Djg%2FJ2CblOGQjDlAM2GgVKs1XRyPkAvryOF%2FpMblweMs2U9k0Rxzyi5%2FmFkzA9qBcD4OAB7Pu2fctJo9Q&X-Amz-Signature=86953383335ffee53477003769d22bc77e80b61a486de95fe13be9bd2656fc81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
