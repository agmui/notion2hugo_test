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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFTCUMB%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFMPki6%2FOaLaNu%2FU1agABt8V7eJuwiRjzqbYjr6RQGW8AiAYjvB%2Ft%2Fh%2FkF5vVwoX0irAmMxKRNkeQJVG7XSuIM3upCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCEAy%2FUJ1HIAwYzKDKtwDw9MG3qOq07beVL%2B8EEUNdBCzsdifFKGjdgbBBGlw%2Fx9dZP48fE19j66pjKfRniVwtNdZE5Mg63GbXkFcPFnSl6tEeM4yVI87S8PfmnZ8JZ2g9MgCeQqCfG1VETTJLxw4fDw2iEK2TorDfBRR3m57aZ%2BWGWj66Agr8Iue7TlM2QBYj6k7HplmtDJg7pUBrW9SNpTwKAmrqY74SclrOGvJfNjfFeCEneXdxAp7KnV5QnegHgh86EmngIPyMpowdzdiVFzLB425WGrGsPrxH4S7BeFFMzadk0tsUYpaaqGzYP%2FhgWtBlzpKuau4pup%2BwY6WXcY3xFa1pL4semkpCI0teYKWWz3x8MuD%2BrPr%2FY6bM5rtjBMv%2FfKrh2JadxTHGdZJCnU4FQq%2B4S5aRLicLbM64zipiQtZcfzv30lwJBBdLUn5X4H1ALJIJaJKnMryb%2BCzymqt%2FJhcBve9rBLUtuI8ejB2prvRwAC%2BuEqDQRUx50bvNEC0HJJlilVW0b6i0c%2FvPfeqOjVlqPVhib40VY3vIdaZnCtl5b5kBsr2AIrKP3HfZPO9X8665LsUCRSgg3uIlgk8PJ1friAY3PQz8d5MGxg%2FFSi6U6ACBsHRbS2upVPg%2FVQDLBkR3y%2F8830wwbunvwY6pgHKkXV8k8yKHygMNEnZ0GwiFXTdbbbQ5RyK02%2F795GtFFlum%2B8OckwOshogOJ48PRU9g2POaQPs0jYRsK9kQ8c41dU3%2BMeObl3bnZpB7%2F%2FG5y5bk%2B6ZVsjsJ3D7Z1Ke8oHnXBo2dj9b5%2BmDmNobXME74UcchDL%2BooIOvvL50MflH8TJJ6tLIxaOhaK%2BwmTRBxaOlRiyFPRyR0RVj6cS0LKH7Pnp7iBJ&X-Amz-Signature=5b9e9e206abe57e155d8ac87ad738e241ee8dfe7c4d865723f36f1efadae2ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFTCUMB%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIFMPki6%2FOaLaNu%2FU1agABt8V7eJuwiRjzqbYjr6RQGW8AiAYjvB%2Ft%2Fh%2FkF5vVwoX0irAmMxKRNkeQJVG7XSuIM3upCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCEAy%2FUJ1HIAwYzKDKtwDw9MG3qOq07beVL%2B8EEUNdBCzsdifFKGjdgbBBGlw%2Fx9dZP48fE19j66pjKfRniVwtNdZE5Mg63GbXkFcPFnSl6tEeM4yVI87S8PfmnZ8JZ2g9MgCeQqCfG1VETTJLxw4fDw2iEK2TorDfBRR3m57aZ%2BWGWj66Agr8Iue7TlM2QBYj6k7HplmtDJg7pUBrW9SNpTwKAmrqY74SclrOGvJfNjfFeCEneXdxAp7KnV5QnegHgh86EmngIPyMpowdzdiVFzLB425WGrGsPrxH4S7BeFFMzadk0tsUYpaaqGzYP%2FhgWtBlzpKuau4pup%2BwY6WXcY3xFa1pL4semkpCI0teYKWWz3x8MuD%2BrPr%2FY6bM5rtjBMv%2FfKrh2JadxTHGdZJCnU4FQq%2B4S5aRLicLbM64zipiQtZcfzv30lwJBBdLUn5X4H1ALJIJaJKnMryb%2BCzymqt%2FJhcBve9rBLUtuI8ejB2prvRwAC%2BuEqDQRUx50bvNEC0HJJlilVW0b6i0c%2FvPfeqOjVlqPVhib40VY3vIdaZnCtl5b5kBsr2AIrKP3HfZPO9X8665LsUCRSgg3uIlgk8PJ1friAY3PQz8d5MGxg%2FFSi6U6ACBsHRbS2upVPg%2FVQDLBkR3y%2F8830wwbunvwY6pgHKkXV8k8yKHygMNEnZ0GwiFXTdbbbQ5RyK02%2F795GtFFlum%2B8OckwOshogOJ48PRU9g2POaQPs0jYRsK9kQ8c41dU3%2BMeObl3bnZpB7%2F%2FG5y5bk%2B6ZVsjsJ3D7Z1Ke8oHnXBo2dj9b5%2BmDmNobXME74UcchDL%2BooIOvvL50MflH8TJJ6tLIxaOhaK%2BwmTRBxaOlRiyFPRyR0RVj6cS0LKH7Pnp7iBJ&X-Amz-Signature=69d3f4b0d6215ecd4111016920b34187593624d9c1b85deb4ed4dfd404092b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
