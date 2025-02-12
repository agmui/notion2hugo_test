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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFIHUKDO%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuQ13cQbNiRRjKmehouDWdZ3TRxyX8v50n3kwJ3z2iyQIhAJIeehLZ68dSTRnKI5SvzyZaJqdMpWdX5TRgmLkGo5KoKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxx7FEjLkCBgQCYh%2F4q3APyPA0s0JxsXsfYoqZ8KbqmhsEs9quIUeqS7otbFhGwfvaiYWRzH9gSaLDiJj%2BNZ3AUqMFCYH%2BCSjqa%2B4vtYrBK9%2FyVAKQu9mVtlYdaZgurAc4WhY%2BO4Iz2aLYQgL2E%2Fy9pWm3239GBeb%2FS3P5PvgWcWKAhpE4%2FILFTaJ%2BmbEpiKQpBQzb5PH1zVPC9KOazMuZNDcQcAcNkjFDBMLkuFBY%2B8J4d3zMbpHUEhffnLVb4EvodYklQqPyyeemYcesd0OhKTeUSBjVtTvus4pVWnK6faOne2CgIdByY0TWOMCQG3O4PcWWHtPNp94wbdtRAXYKDsRV4gMTO6FnmEYYFRbwrYNTTQM5cF2kGYyCIhVLDGas3DxIg5%2FsxzcdxMnoTkpkX5RvHICkKmGn8u43tqTbtvO6fl3KwpRXfANqBZH4TItj1nBruhyG%2BJDy0wYKEeOaQPCkzpAv88vS9roDE%2BRKjmnncG5R8X%2Fc04CMfieSXBKMV8EPQWW1qxC07o874rrC6FR0N5%2BDTXWZi7oEvPuxT%2FAo5XUU1bc49kDaUKFII8Oi2t7r3DGP8qYZzmfe9uRcL%2BzpuquiJ%2Baxf1k%2B5aUaxguU%2BraXzlMnXVMa55WKrlAVFdxMjFvASh%2BbIczCOrLK9BjqkAWGtT7Zi24mRXosjvPyhg1qQ0eYIzBDuGiiFHQudukbQWWFhTbTE8ynUgJO2IEPC735CPa4RWdCbEgljbB6Cp%2Bzwu%2Bya%2FbDI%2F9nA5nYB%2BvvyQEY1EQ5oPOL7q9OqzoymWctmOFyUzRtFO9HIyRL3ItAhIpc%2B%2B%2BD%2Bux0LNP5h0CtMkvQOikLuG8wU9CJ%2BA%2B81FYvJQjHRDSEenUY9JusqewnA9hOS&X-Amz-Signature=58341fd2d2c27cb3fa4f1a2fefa25e24092a2881bbf917efd4de6f798df1b246&X-Amz-SignedHeaders=host&x-id=GetObject)

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
