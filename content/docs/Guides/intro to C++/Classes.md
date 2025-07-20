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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDI5LKRR%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt4nPyNEjprSk%2FEOSVK%2F4zMkF1UjyEeUnEYtAnkeMLpAiBlyZhToDzrUdzvc6PsYV%2FTspBciNzBx8RPVUYVUaofvyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK4oR%2FlFB4f6ZZRfSKtwDXSKKZN02e2A26CuhNWrTTDl0U9xcDxB%2Fu90CEYXM1Xu34JbcdU1XfrVgTIHjMga1AHMY%2FV9hj0thFuWH1cla1IRhLf9HhDngfX9UK6uKAWBL2e%2BaYbwObyVi3OPHDBKyO4imc67HRnFwjRLFeQd5JueNKjICmOorgECDC436VElYFBpqg3ancE9fXi46571FQt2iUVroCe685ymfPMyQCQ1wTwSe%2FYR1c%2F1YADIZM2FIN9CpA39lQl7iuifxUdomRvbCdPaQeQTg0BrL28OAYKLxrvN%2FVzwJkQO6vklBiwtYzfq1o%2FMBwritB9%2BsbMV8ksudHejlA8lUGyBlbJbKczk6CTb7G%2FQuL9x3EzU6idG9LOskPaAHIht9AvZ8losye5MJ18wNlftdUm%2BZ39kZGP6ZO8XGpufhP1ZhSuNXFxmYCAFsJLELLaxV6XPAQ9UrTpfuN29mhTPcFA2qDQ%2Fj7lTknhwBz8nipoACOnzniN4bza1P8RnuwAs%2BSMYg0noOMXO8N5H%2Fr2Wo8I80Z3lJYNWL2jQNv0W%2FwYaJX0mw6sTv83EGQm5fAF1jPOnDS%2Bcs9gT4L%2FKoT4qCEL3uSzNn3bLulnj98JpXfwWCsdEtN5TAQtEoK9PC8XtMnC8wnP30wwY6pgGoq1%2BBoWJdUTn6SpLG2d6jInWKp8a5H4RMrDb3yeTXr%2FLQufoTd%2BNma7N88NyqgIqjIl7Z9qsAByPEq9E64AswH578TPIPZ3WF9mtexr%2Fu%2BOil2EDVkdR0B8WhCy0SFBnotsropxvvHSo%2BUmJJnD2r%2BjkeWzC4YwMKXgM7wlN2Y2QNs5b6nZIHHo1U2sIxPfqRbeEd25cfL1C6socX07HwTjC4obY7&X-Amz-Signature=ea32f03d4c4fe5996c888dc4df01199e8ce0f822ac194bfb7f2cbbfdc338fbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
