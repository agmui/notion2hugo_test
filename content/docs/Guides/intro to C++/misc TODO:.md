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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC5WIMU3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICD%2F3QNChJN9Fl2DEBoFACKaRxQOs%2FR4ESFA0SYIcCynAiEAxT4ourKGnnMn%2BgqwfkpqGdR5AoAmN%2BADs1NGb458aTcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBqLrcm2MCyMhADYkCrcA56E0TJaA%2B8HCTmMhUO%2B2GonIttkBI6CBcH4%2BQxsbbzD%2B6A2ibuaL3cUSnvEsPJ9JCSsMjSj0ovALWGAL%2BUIXC7JKiZbTzIH6fjDoc2415rlWTZptpIcnKiyN7OI6DASMToMH90uQGgGjjh%2B63sE7Lnhdcn2E60c2EUSZm3iDMeY%2Braevpmj8IaEJVFjFkBESQ4odJ5TzXhi2jytd2dJIqBMSGNO59EbZtzoP8ga0eB5Ysd3vSefwQ4o8haffIWbDRT2DjxkI5COaJ0QclAGLJc%2F%2BcOT8nYez6J7vBGFYvJiOI8GYXE6YlQkm%2BTFM4jEtigNAfcdySCtWdBkClgSL7gmbU2xUEPbuevwZX7ch3D4rlzeJbbH6LdnKFyMddYmBtWttWtCEivJOEqgw1u2ngO7wsI%2FdLgxD6Gz5SaPIu5gfZb9tTPRsMoETFaeLR6uDm40TDKBwwC9JVvX0MZSX1xFKEuBdpDz7e9FmEn1w2hKMUN%2BEZAhQfe1V81WyQauo5u%2FfFopho4wB55VxZSWUekYgL01ruPvqaSmPktWhpsQlvQvTLvEGuzLU0bLVZPq%2BUDprsb2KfjE%2FI6dazrueqQrjvILjvxEGUJDW%2FiYCil5HkuHOyIK9KpDMZCfML%2B%2F5MMGOqUBb%2FtZd3TF%2B28jPktuAKS%2FhUcHF1UEDB2IYyHkvyOGahP2iXMpctU%2F%2FGnyy5JVSm5GsTCb8%2F4rkhAvgNO%2FhFxhYu7QlQ8zztVE0AIo8IqH4HV7xse1oxKhbaEXnjRYmbBrsQ9XotoebmZfSmr5QOJnGAg2HRKCix2XNZ7reE%2BefHZNElm8wV6tLTfJ6jjdK4LtzPvl52Pscpf%2BmChm6bG9CEiWPWYZ&X-Amz-Signature=43cc4ccb7873cf29ac07c77ddbfe5f534c0637fa5dbefacd7bd4633d406a037b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC5WIMU3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T171019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCICD%2F3QNChJN9Fl2DEBoFACKaRxQOs%2FR4ESFA0SYIcCynAiEAxT4ourKGnnMn%2BgqwfkpqGdR5AoAmN%2BADs1NGb458aTcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDBqLrcm2MCyMhADYkCrcA56E0TJaA%2B8HCTmMhUO%2B2GonIttkBI6CBcH4%2BQxsbbzD%2B6A2ibuaL3cUSnvEsPJ9JCSsMjSj0ovALWGAL%2BUIXC7JKiZbTzIH6fjDoc2415rlWTZptpIcnKiyN7OI6DASMToMH90uQGgGjjh%2B63sE7Lnhdcn2E60c2EUSZm3iDMeY%2Braevpmj8IaEJVFjFkBESQ4odJ5TzXhi2jytd2dJIqBMSGNO59EbZtzoP8ga0eB5Ysd3vSefwQ4o8haffIWbDRT2DjxkI5COaJ0QclAGLJc%2F%2BcOT8nYez6J7vBGFYvJiOI8GYXE6YlQkm%2BTFM4jEtigNAfcdySCtWdBkClgSL7gmbU2xUEPbuevwZX7ch3D4rlzeJbbH6LdnKFyMddYmBtWttWtCEivJOEqgw1u2ngO7wsI%2FdLgxD6Gz5SaPIu5gfZb9tTPRsMoETFaeLR6uDm40TDKBwwC9JVvX0MZSX1xFKEuBdpDz7e9FmEn1w2hKMUN%2BEZAhQfe1V81WyQauo5u%2FfFopho4wB55VxZSWUekYgL01ruPvqaSmPktWhpsQlvQvTLvEGuzLU0bLVZPq%2BUDprsb2KfjE%2FI6dazrueqQrjvILjvxEGUJDW%2FiYCil5HkuHOyIK9KpDMZCfML%2B%2F5MMGOqUBb%2FtZd3TF%2B28jPktuAKS%2FhUcHF1UEDB2IYyHkvyOGahP2iXMpctU%2F%2FGnyy5JVSm5GsTCb8%2F4rkhAvgNO%2FhFxhYu7QlQ8zztVE0AIo8IqH4HV7xse1oxKhbaEXnjRYmbBrsQ9XotoebmZfSmr5QOJnGAg2HRKCix2XNZ7reE%2BefHZNElm8wV6tLTfJ6jjdK4LtzPvl52Pscpf%2BmChm6bG9CEiWPWYZ&X-Amz-Signature=f3b8dcec0a3767f75c177646db4e82bca3dec4dd935ec205d4707e05d5a37bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
