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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SYHLG32%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDUY4ipYS%2FS6wz%2BRJfmaBH98PQ8wd44UxAZOrG%2BhfmK2QIhAO88q0jWv2PdOWN%2F1HcgygXWh86rCQg%2FryjZ2wZy%2BncwKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyb4T3CjzdCOdMXJyYq3AMcavp0cUSdEd5MrK9dY9%2F9acqaOwvt5Mxl1oc0rSNtNuyrpecjMySlH7yAsnvl%2F93eZv0gN%2FzI7sMhCanGIgRq4vtGFL493QClJ06bLLawd6O1rKHWI9TYWX93u9s%2BsC4SMcCDHUq1Hos3WSRNDFs9b8fVk7khDBXZO0MWPiF5Q%2ByDTHm0PflIEFkFynm6Ul4qCj9fuDWJQ1XIsNyXPpv5KJBf7StJcoRE0zj4Il9Pn6pOW8LXr2sPgT2KKBlD5nhAhbh2YT12XabNJhtVu2rQ1aab11Zz4Z9Ts6saBhuEewFnYIp9Gytne6SM3GUcVlKBkca3VWiuTnEQs0uFFabF3sBBiRkWGrrR8lDVU3ijAkPpdke5pVTo8zPf631tivcO5SvyptohbdXUHem%2B6oYZ0vanHP95chUrwLuLoWo8KLVACBjFuhGB5YrUpofu3D6L4Phg7ZfuS43gkkUVNkF1qIx%2BByWHxjR64MBJcPlZcxaVQg%2Bx8wHDJ%2FA9OR%2F1l%2Fl2gFFhulSjDZnbDtVg2NmYssm%2BeIT%2F6K3mDzfJjpw72RJfDGMTkBSQozRiwcBC2WoOf1e%2FSf4Pd6M1RJcJ7dQNOqTO37rauJukZwG6ma6MivTomO6NM0fU7KEAizD68eS%2FBjqkAW2aikTL8yR1tcT4%2BzlSTHubNjOrG%2Bevtg17nJfhitZmEpYXyXV4QMHPFFPS8kC5DXle7xTWU%2FyKKE1MAlT0wOP4nytZ3C6ZErWjqqVCFWV2L35ShcYpub8ZrepDTUo%2FhKTeY5M%2BEzYLyHkyc36VDpeu1hOaZNDDsN1S5utiyR2BHKSICu3rEokvApjjJgUxPbJef272OVC%2Bg0AKgJj4u9xV29nq&X-Amz-Signature=54c8920d2f4b1871352f1448c556d49cd2e5b055a799a188631857a00cbac3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SYHLG32%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDUY4ipYS%2FS6wz%2BRJfmaBH98PQ8wd44UxAZOrG%2BhfmK2QIhAO88q0jWv2PdOWN%2F1HcgygXWh86rCQg%2FryjZ2wZy%2BncwKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyb4T3CjzdCOdMXJyYq3AMcavp0cUSdEd5MrK9dY9%2F9acqaOwvt5Mxl1oc0rSNtNuyrpecjMySlH7yAsnvl%2F93eZv0gN%2FzI7sMhCanGIgRq4vtGFL493QClJ06bLLawd6O1rKHWI9TYWX93u9s%2BsC4SMcCDHUq1Hos3WSRNDFs9b8fVk7khDBXZO0MWPiF5Q%2ByDTHm0PflIEFkFynm6Ul4qCj9fuDWJQ1XIsNyXPpv5KJBf7StJcoRE0zj4Il9Pn6pOW8LXr2sPgT2KKBlD5nhAhbh2YT12XabNJhtVu2rQ1aab11Zz4Z9Ts6saBhuEewFnYIp9Gytne6SM3GUcVlKBkca3VWiuTnEQs0uFFabF3sBBiRkWGrrR8lDVU3ijAkPpdke5pVTo8zPf631tivcO5SvyptohbdXUHem%2B6oYZ0vanHP95chUrwLuLoWo8KLVACBjFuhGB5YrUpofu3D6L4Phg7ZfuS43gkkUVNkF1qIx%2BByWHxjR64MBJcPlZcxaVQg%2Bx8wHDJ%2FA9OR%2F1l%2Fl2gFFhulSjDZnbDtVg2NmYssm%2BeIT%2F6K3mDzfJjpw72RJfDGMTkBSQozRiwcBC2WoOf1e%2FSf4Pd6M1RJcJ7dQNOqTO37rauJukZwG6ma6MivTomO6NM0fU7KEAizD68eS%2FBjqkAW2aikTL8yR1tcT4%2BzlSTHubNjOrG%2Bevtg17nJfhitZmEpYXyXV4QMHPFFPS8kC5DXle7xTWU%2FyKKE1MAlT0wOP4nytZ3C6ZErWjqqVCFWV2L35ShcYpub8ZrepDTUo%2FhKTeY5M%2BEzYLyHkyc36VDpeu1hOaZNDDsN1S5utiyR2BHKSICu3rEokvApjjJgUxPbJef272OVC%2Bg0AKgJj4u9xV29nq&X-Amz-Signature=f3c48a0e35819b10571ece83ec2b8cd75069e5118850869da6a8fd08aea52039&X-Amz-SignedHeaders=host&x-id=GetObject)

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
