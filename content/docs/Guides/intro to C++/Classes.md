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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YK7BTBK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTdOSFJjtnzp7bLOOwNjvKL%2BOkmyKQ9TXhrEWRFOO42wIhAPP4Tr4g9PXEa3hxAq5E9pqAG5v9RPJn%2FBQzLRTgNUhuKv8DCDAQABoMNjM3NDIzMTgzODA1IgwTudvybHgyPYu3ziIq3ANWYdQtxFd%2FAezYJf3z%2FzAYonzaAVw7K76FQurB1ajpHY8xluMmO8p828aHM7D5VK%2BAe2Ie7WbG9DhJwb2gy1B9PDvoZk6TcGu6I9yd24sFn2BUIpyuSfEec%2B692h2%2FjNWTZdSDcLg6f4SlJ%2FcFrANTjwajJFJm6DRTLJhbyHNme1OvpgIkHlWm3ERVHNuh2FywoUFExmJB%2F%2FhmUEu9jLTswZEpj0nF4aUm5udpvA%2Bk1ZqsM41fk7011tZxTli39YxpmfXFJzn6UatycYIKnSIyq5XNxe2RJjj8rs67I5j4aPBHVSSokrz6qj1YMFcaOq31dAqfwxs0AasSRf3fE2w1JJWgX0OCj4ubKJsCxHXXIur0L1r5CxddwyVXx%2BunDweuMFU1S%2BfB17QGK7Ncu7GEshPW2qOyRk4KSc3q9VPtojBHODJzaMDo9n1EXIWZxtSPIulAd%2BSmdqzP8v5N8gy9Vke%2FNjhseqq%2BFl0rCSTk99s0lb1fxubjqdP69z%2Bf6WfMtxQdvmdQV5i9CbYJpAXEp0eP8as7HEGQMtlcaoH%2BMThJBX8eFCAkJV6PzP3LNWPfyxd%2FDiwR1cN210hAe%2F7gVehLyet6GyUdR4ybK7fJSyXPs8VD8nusZO%2FzVjCM8Ka%2BBjqkATpEHI9Wm6rsfjDakGsbhHHSc6FIAhwbby%2FbUWNfHHO1lX9H%2FTg3plTDd63qkrEB7GE8uoVJwQgXlcxFZ4%2FhlpAK5It9Q0xqYMnOlFC0shgBAoVeZL1K4xULDGnH4Hb80rIpSA%2F%2BqAa%2FpqwEdfEqjxIXY81rzlNbaqFAWY7SRceBs7KB9iVo9V8eSnv5Fxg6kZVur6yTH1I7Kvng2nPMb0MRt0Y%2B&X-Amz-Signature=8d09e064cb5037513037842846d845f10cc0aae4baf1f6ce752849de480eefba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
