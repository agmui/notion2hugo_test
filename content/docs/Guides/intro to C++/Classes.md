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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS5XC465%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDBZpiDfCePwO87KxTVyFXAPBMz38ubVYV%2BEvD%2B07wL9gIhAOMQfMn1%2B5AUDAR6XMy2KQ2dS5fCLc5nEaYllZTyMzJYKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy5RKQs1%2BOcW9D8Q0q3AO9dlsLUkZRVBfmK3H1FVogqK5h7TIjruvxfK43NqlH48uPKQtgyA8chrQAaUiO1cp%2F865%2F6NokBKucR1iG%2B8Uvu2y9iWYKe7LQtfBDa7n%2BHPga1uWEQaUiup6inM5wI3AbakUx1tILlWoyIIWdt9SVnHkvfJSfDkuUum6ysX3T2vWt3JozzLP%2BkBI%2B%2FLQN51G9SCNXVht4pzFEIqFCfWxatX4%2F9d4RRV5K7R7TWkOXIuCjfWHE68uCYvAHo8d%2BW32huASW00sbTx%2F4uQR0V%2BxLxqg1BnuI6SU1nPatwfiYSbMaZtsCumujHA1xo3hJmP0LJofj%2B3HSb2Jfjq3Olr88X4Gnsdrbf2e%2FHGEnMyNkfk7mzyf8c7HayPiCFRcnU4fNboie%2FMCyrjyCFnSiGIaWnZIoGKEp0rtUoTKZA8ORGud6rsBeXr4MxmWk3LrDSLFe9l4Y%2BVPArd154lX5h08tYfdFxqmbPEtrV5pukF3jFApSRoBUIUjYLooqrD6dQwSSVw80A%2Bm0Sa4I9OM04Du90rrryzdKyJas%2FHTEF5M4ZTCnvaP4Sv%2F4vO2bfLOnCH9%2FoFhpiPVbUIwccAJpx8blJOVD5AIdEUMP8OGWkf8un6SpF1j00Dr9NIG%2BFjDb76fGBjqkARZmlLPn6dVvhe7afA4A8LGu8%2BbiVSS5a5sSVXd1A0dHeD6uTHZfD7iwSoVDUdqekOdtUUkFF1JAixMWSvBGIHSpv9vi1SSpbeZy3a78%2Bi4mQCiDfgiyUOLKk7VlRVyaAU3VUm26gUWlBQN4LD8Hr5MpBW5P6ny96687A9t8r6lg7SWbH7m7UH%2B8pGisbKFfFTAVqJpDMr%2Bt3Bv5MJ4pN1F8zVHn&X-Amz-Signature=c4a9a33b37afd089c74ce57fd5b59b0e8b887f0fb35c0930c1b524721e925fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
