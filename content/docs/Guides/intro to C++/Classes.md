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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657REYLRO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX%2F8rz3dLtM0f70uknKoft86BaKko2w53m2Qy37spZGQIhAJYjbyYL5C%2B8bdzLlTk7%2FpZ1wWDI%2BTS0FpMbpRLy3y73KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4%2FeaJ3s%2BtpUBtbM4q3AOhsfPPCaXm3k1GLZByyxR1TTmGnUVsbdbxrDLJtuolMRQ6DlYRIucDMHCGmqEvlP1a%2FI95ZPOmAPpw9%2F3cC98uzfRtmbGk8RWjMTlUhLlo2i%2FW1otadmbvflhogRxho01FaGpx9k8ZbYrgHUNr89YQJ0OkwqcZVOGQcVreUMlHvsnryCfTPC7CFp3crmKXventiKe1v%2BcZHBxsAukVGWtfQcIxcFDejR6Xcys6DQ1suSHvbvVYir%2BRwjS8zI%2FPWpUPx5eVKaAZ1HQ4IHMl1ZChRpbam0uTNmahPzY9RMy1uw3sqXngHYbUuISTEhkZ1GEYNN5x2xER4ivzJNa4eLj5%2BgscUHN6%2BV%2B%2FYWX5nZWKddT0vZu3V1LSrD0ZAiJPwAGE0UCWzAHdY7mgoteI797Foc1P7mLOdTQPvu0Z3GweRuMLrKRppvOxarekGBXgJk4Ts2js2iLso0OhoHytnNDDFG5NKITXRRJYIeDLy2Ac8bnEuK9796CP4FaI9RN%2F31XLrd4bFXepiPL%2BC4RiffnWtBXrKKL4UVqs7w30NndzBwsGrCK7qJ7N3LIDiM8mPEgUx8YN6FYxFbDWjz81GnmcqL0J0HqCvFECBEWOQFTs1zwpyBxvvff70EymCjCZxMLABjqkAW16JOMR8ixu6kJuU6Em0FvXvV0su8EXpMZsSt47NTTcNy%2BgEKym9axToTZ34ZKLccrvtINAdHduprbF%2BLoORbpTxhd9IHP%2BT77cQkP%2Fvaa3L6P4Ulf9TFADryqzvHH3Ihb0SrqKuFPEnQLH6d8VoK4Feu%2BO29mD9HuzrTaTeM%2BjRpoG8znV7B%2Be92MlVx8m7OBO9clb1TSIrHPFTj8%2BStTnCT3U&X-Amz-Signature=59805473aee823e2a9d0b74d930532b463c62bb971e9d33e7eeb4497bad993d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
