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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SXXXQ5B%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDMoJyHzYPaj1JLD7fOxGSQWSoBO%2Fg6GgciRWKhv91pZwIgPAJ8PzEhmno1aLx27EgCQCqCaB392wJtX86Lis4xt88qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqsClrGgAn0Jxw6MSrcA5MoxJhksZtXU8Qxzyc%2FubiK1SCJTKd2Hb%2FLlGMBQ0DFIWFICHMJa5bwa6Tj61ceWpxdBhu%2FiMQnru0YjCjJ%2BOx8krL0eX0iVKnd%2Fvl%2Bvlwq8qoatvP3xAZtJ44NsYAlGfBtIdItwtn4mvMJf0gJ4zc%2F5GoYtctufQ8y7d23LFCOFjW9mRenvTPJ9gaGClU4nHq0s1AyALVij8A9sd%2FHhmvnF1Szxr0b0G4zkbCED5cJgNGfJvdikNL5RiNyx33OKvL8q%2BMGUn6xcC3gLsQKPqdwTzVjzpLdJe9piVbHsLTX6VPDSY%2FE2wJuMq0dyo24d71BDe5eanWVagcCQVOoYBVZY1n9jOu8J9uX80McPbSSqVrfZBlgnuNGQ920VJvpqRhYtMNqE5d1nZbGoD%2B%2FOh5DcHMgmYgkANdmOM0Hoqz2orZ1CRdusHZXqczQgPkLShKKzFmMfIKDDGHPcuZrn6VYA6aGjRLnspIyau4T98fU99B7%2Feo3A5gt7TLNdnYMUBs8iW0UvmSg6D8CES7AwXSP%2BF5cuuSCA%2BSo%2BqdpC%2BtAodjTpX6I%2FJ6nsunp3AZ6OfDxxICkK4M15sp39wlSTknfS1YVDPT8VfRmELNy4sz66m83KBJcAhu%2F77%2BDMOON7b8GOqUBMjN7ymP4ECfA%2FP2LghdEKbRGCi89%2BrrmvZUPOqY1MN0RsBDjSw2h%2Fodyu%2F0HDbG2A2IYIAplDpvKYgg3E8CHYgbSyvmeRBL8fRBzprhThGQZiPCL%2BCEg1VRKOQa9Q9VRQduF9rqV9GjgN5UISlqlXicbosii0LokEi5XTje4HD%2Bc9jvVUCzccprVDzLBNw%2B8pLo294v2bJIIYXgYZjPChbuwxl1l&X-Amz-Signature=f0b395b7d299a8a8c287940e489e6792b21bdd596f20aa2d1174e8c4f4926ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
