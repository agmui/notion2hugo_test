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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEU7K5CW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFxGeld7lTuTTgs5MLxXemlnBTDL%2B6Tg7JkXoIgKK6q2AiEAhNEXYI4v1hnns4JymbnZ5uU7K6sHNqgJXciEtMYSUcUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK6vH2C4xpjwMt2GpyrcA4XxfPoCSCTfvOqYJg3EiXHfoBK1PognKClgTrYLNFe%2FXiVfpRc8RDvhJSmEU6V23DKWv%2BfOhpIbKIgq%2BmcXOBpgbMxLQRKrToKxlJQuHUJfLEa4L4vRjmFBgs7Ioquw4kF9yLYrmi3fJl6Q%2Bt53WLhcDSN5gBXDVCeVPgep5ulA%2BDWUHkjg8FcTe4TRgh3IRO9PZXvEpVpG%2BVDmVY0sO%2F5sxec4ijUZDr2fzeQeQBfoMl4rIbeQXAnwaAd06CXhw9CLhxEe6yYzBOKs7nxSUz9Z45IR37u0ddoZ3hhdSPC%2BQnWpQRLzFPLfKM6NcmDQ5F4lSULICTMSXQNgo3%2FzzR%2BgU22dLq8DiSvPvDe2V45bOch4Xm%2FoCVEU9xTUlIBeixqMdyBrczKVRaYK%2FX%2Be9D2G2Lh4aPwzbl7%2FFSOYh7YpnFElcJQ5g1OiBgDJgXwq5X1g%2FIoOqD7O89Bn%2Fq259xZmxcWToSp2X7jOXXhKLM92UdoTLD%2BEtxIFpwRFp%2F1TTcC0ZxgV1FSzHMxJ3sj0lSgn%2BWmHd5zEuhnLA4mwcA0qAcGdZ9ck4dfSxl6HsUi0oFAcvrqbxxgqJtq8%2BVfM0x%2BbNrJ1jkfFEIVWY8hgRHVUCmRSAjq6zW93nwlKMIW%2BzL0GOqUBLEthS3mUNiChR%2BOe7Aeysd5ZZx1juO%2B5kYK8Q8GO5bGhnVkbj8H9u5DDvCUxj%2B8pLATB5r3Co08buAUzCfoNzmkizgL%2FcHdyNtq4BU%2B4OXoNCAbvCZk5woMQFgNGlavvnniC1L6Efr%2FV792pPMMYMpU14BTv6kzGxyC%2FQvVf3TwdyChQIfYPhGCyTiPt28%2B1M3mZ31Pc3cFamVuJgD0wMR%2BGGLI6&X-Amz-Signature=0c2fa6f5d9130a4bf9b239979be5a909871d0f090b115e9f38f29ebbdbca22b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
