---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BBQY6XP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2v%2FWi0Nep9Fk7s5421XR%2BwGBdUvwJf%2FY2fSiH30USAIhAKBtvo8zmabrbVYxyz4HGqMolJcAd0hBopL6ZI3ju7a2KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRRvoV945g75LhZq4q3AMHReB%2Bbyx5dZCkDLxj%2FkCJyTnMPywpu9SF8r1Nm%2BEXTziHw91IGt09CFQLTZSvZB7IrDk93uVHPaAHpQxD5XpSYwLO%2FMITHaaGVhqC4C8DQDD3UKCoTAJ4olZv2%2FCdBDsybesQOAxtoBsbl2HhQuOpO7dnafHqNAb337SISD2KWI6im3kycLOruoNKGPSeeyfKzj%2B%2BfggoXPXtUT5ObLKxo6ic3FzeQGQdP4Lumjuz7gD2CCGsol6Vm%2BbAGszPvJUkLIuKYijvIzCQWmGGh%2F4QbkbiCoEiz1c%2FNh0Ir%2BesjHTgw%2Fkwq8wOegjnS7ClAhtjYN5LOZ%2BGoaLZBxAU8%2Bc%2FP5sGp0IGs0X4xP2%2BvGPeVDoMn55afVYzqOiuoA%2BvcARlalp3YeSS14MlnCCL%2FK%2FgMeWgl5yl8qTlYxM7GSYIA74YXYQwx0hYNhL%2B8ll5kbInO3tnnP%2BRehzkOY0aB0NGOea%2FgvfFzr5oqaTMPZzeA4iV0jnralNHpElXT1nc3teqdbuo8HGCSunvjNDntAAwpzYDNfs5ZQ2tPXOSY5mFUuWeqgOwa5gM55x5hWb1nyllYlzH3%2B7%2FptHY%2B5sx5vsbTQKXerx2CQHbCKcBrlqv8FAXaRIaqZqQ19cplzCykP%2FCBjqkARGI%2FgJYyald70eA6ZyvMjhAnpmnVh%2BXq79%2FpdlckeVST%2FbDd6kRfWOUMi0iyw0qdY672tPubWJYl1C4Ch6siT1dZdJ1UHP4Av%2BkxtOiuEXL2ibkreWH8b7KfwxTYE5kb6vRCvgwzP0WqHJyq323bnzzsN2JVHSNP7j0Da%2B8tes9gmOLqUACMgqv9SNbyO%2FBpheavq8PMfHwhcOnovB0LxJw7358&X-Amz-Signature=28f9565434e3691acc76d7920dcaaf9457b5ed16e413c38a4b5ce3592c680b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BBQY6XP%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDU2v%2FWi0Nep9Fk7s5421XR%2BwGBdUvwJf%2FY2fSiH30USAIhAKBtvo8zmabrbVYxyz4HGqMolJcAd0hBopL6ZI3ju7a2KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRRvoV945g75LhZq4q3AMHReB%2Bbyx5dZCkDLxj%2FkCJyTnMPywpu9SF8r1Nm%2BEXTziHw91IGt09CFQLTZSvZB7IrDk93uVHPaAHpQxD5XpSYwLO%2FMITHaaGVhqC4C8DQDD3UKCoTAJ4olZv2%2FCdBDsybesQOAxtoBsbl2HhQuOpO7dnafHqNAb337SISD2KWI6im3kycLOruoNKGPSeeyfKzj%2B%2BfggoXPXtUT5ObLKxo6ic3FzeQGQdP4Lumjuz7gD2CCGsol6Vm%2BbAGszPvJUkLIuKYijvIzCQWmGGh%2F4QbkbiCoEiz1c%2FNh0Ir%2BesjHTgw%2Fkwq8wOegjnS7ClAhtjYN5LOZ%2BGoaLZBxAU8%2Bc%2FP5sGp0IGs0X4xP2%2BvGPeVDoMn55afVYzqOiuoA%2BvcARlalp3YeSS14MlnCCL%2FK%2FgMeWgl5yl8qTlYxM7GSYIA74YXYQwx0hYNhL%2B8ll5kbInO3tnnP%2BRehzkOY0aB0NGOea%2FgvfFzr5oqaTMPZzeA4iV0jnralNHpElXT1nc3teqdbuo8HGCSunvjNDntAAwpzYDNfs5ZQ2tPXOSY5mFUuWeqgOwa5gM55x5hWb1nyllYlzH3%2B7%2FptHY%2B5sx5vsbTQKXerx2CQHbCKcBrlqv8FAXaRIaqZqQ19cplzCykP%2FCBjqkARGI%2FgJYyald70eA6ZyvMjhAnpmnVh%2BXq79%2FpdlckeVST%2FbDd6kRfWOUMi0iyw0qdY672tPubWJYl1C4Ch6siT1dZdJ1UHP4Av%2BkxtOiuEXL2ibkreWH8b7KfwxTYE5kb6vRCvgwzP0WqHJyq323bnzzsN2JVHSNP7j0Da%2B8tes9gmOLqUACMgqv9SNbyO%2FBpheavq8PMfHwhcOnovB0LxJw7358&X-Amz-Signature=8617a698bc8cf6edab9a44a20cbd9f3fac54644a1b63900051711bfc32a4f387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
