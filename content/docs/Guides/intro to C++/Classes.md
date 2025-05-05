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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RZACCQH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmXK6bedmcGGVU%2B8V4C%2FPR9gUpr0qCke0IYyG2c3VWewIhAMszLZ3anoVPDH4iKhufOiA%2FmBEgD0OKOYIIKwJptLWZKv8DCCgQABoMNjM3NDIzMTgzODA1IgwL%2BwBOXQkFQ9%2FcTDsq3AMsRP3H%2FfqVjt27lxzvaBaDAo1jG0Q9GYiaF6pjkMZR8oIKhEiW6UjLSgie9y%2BzPY2kzCR9QTqvPVooG2nrYQtKUPcae9L5ykSzOUpo%2BFIXDFxC9bhs9qqgZ%2BuNQ1Wcdrm9HhLEIoAUTi%2FqbMbkYn1S6GgLx%2F689m10DxP6C17JUJ02hF8gzLIqdnAkYJtnDyDHpzKj3bXY0LiwyDpXP57hVzSJjNamCBlaIX69%2FogZUWxEFqF7YraB97YdJx4XurLQumNDuaISah3jB0qdgFDo9puem4iQ27SOTW5sEI8S3m6%2B5KwYnVuX5dulqX4fl6cmwQz3%2Bl5Ik0X1cDpiTfnQOpdn6kqgVKK%2FDs10ViKtAN4lfe%2BGPxmepakpp3tIGvQKXq4Zqtz3TfzILQvolCY8c5oXufcZnSu7Yhi7cf35mBG6hYrz5%2FzZoatMJWfBVFzccK77uFfzXxDqaHXuivoAUxa4fqj7XDQURUuRgm6%2FBaO95yf05jfuQSNNO0s0gom1scV%2BZSySe5DFrUgXAIs%2ByXuVKKJdfBuWt1YJknghE69c%2FX5pUgBHtIMX7TlBsCtl%2BFDqY03SOSX6n6dMRJyK%2F4eNhM1iMDnGgHZxkeMLSe69Mx3HgH%2FyOSHh1DCaz%2BHABjqkAUBKBh%2BUyM%2FWje%2FQLz28Tnm%2BfVh3bRKXotlxVUQFqhBWQTKTHCfeT0Zy%2B2lRKEeGCthszfaiCXlLEvhLG3fW17nUk8upf2iEo0ZK%2FfqKPq%2B07%2B47zWFcLFGnJabilYEQnHfuQwm3dtUUNs9MBaxSxgUBXAPSqel6rW%2F05otsd6MqMkmgpr5oGGZzwIP4EDSh1omx5bNZ0i%2FZVzdYNhNsbl0ayLS7&X-Amz-Signature=28a452b8aea69d9b64ae766429ad787e22180aa11f880e16f69d06488258258f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
