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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XKCHQD%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFXFElh9dtKySY3NL9Dl0Prta9UPIlUNwx65LbGHe5lQAiA0G07mYEYTunoZT57ymckvcdlXR5isv9h6E2tfkiwD6yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMLhf0c%2FOPAmy4w%2BIrKtwDfw%2BbLJEZ%2FOufR6TJCT4CCSfF86xAtLgMAdtqk8X6oj8yywBRtZE8vB%2BXqJaVSyiQRXI9no5rqpVmnHwW5ofjxRHeLtvOpvotVE9pDB%2FYoVC%2FjEphhaVfTEfjn29Cvbw5fypk6cMEPP8m%2BXl9KD2vc%2BO6i99CnL9u3YX6ON9s8RaXfGBk9OPEw5NgQ1L99C9yluYiupi7kPDnU%2BHZieNwC%2F4hTxtFbJX%2F85ppkk45nZrYgliTZXbZwy85I95aMyryHSmMOkhsQLDVNj6zBiPdmz2RStQ87AbJXsQ9%2BL8lRxKgC%2F4%2FDulNrlg780lYP9Bu3mU3FkrOcn2qz%2FDonaF9Kz8e%2F2FDrtmdWSForNixwqr6qTH%2FX1drKdGhRcEvDvvxIf5CP8JG%2F7aPO60vvZF1ukNEGnJR49nWeC38FBY0diOnhcdKBTmvI0r2l%2FjvfeU6nM1A1MUvHrscBqU574lGbnkLmuiXvYuJcqSqgR%2BwEAK5RI3mEXKQifnZt2shC48oZ6ZkQnq1QMI2FxmAQDGyAyKIU7c6R25EM9qPvF4g%2FqYP%2FdnuRA6LLurKij31rJmE6pGJmTUyf7A%2BJpjmKWA2ZiYk271KggEkkDj4UGa%2BtOBIhZab70XTdgoL5OUw84vWvwY6pgFYjRVzARJ%2FRue%2F%2BOcQJ3ebQthn4l8NZdbxJv%2BKmEvVwsDPh2OsxWL29vpulSAaG%2FUr%2FkRsAyvGyiIvLgHbKsR%2FdQhe2MfnGTqGkc4Xt1AB9lvRJp3sYgvGn0fHd%2B8dz2vgC2gK5gz1Qt0Dsx0h35TW9e%2F0gq%2Bk3cyFPzB9PdAILe%2FVuOVKMnzXifOSTjiCl07X%2F0Tzkt0ai1cUQ3yn97eETZOFf9OV&X-Amz-Signature=0db5a68894c961422863456aa39f63fe49526ed47784934415a76022ec82170e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XKCHQD%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIFXFElh9dtKySY3NL9Dl0Prta9UPIlUNwx65LbGHe5lQAiA0G07mYEYTunoZT57ymckvcdlXR5isv9h6E2tfkiwD6yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMLhf0c%2FOPAmy4w%2BIrKtwDfw%2BbLJEZ%2FOufR6TJCT4CCSfF86xAtLgMAdtqk8X6oj8yywBRtZE8vB%2BXqJaVSyiQRXI9no5rqpVmnHwW5ofjxRHeLtvOpvotVE9pDB%2FYoVC%2FjEphhaVfTEfjn29Cvbw5fypk6cMEPP8m%2BXl9KD2vc%2BO6i99CnL9u3YX6ON9s8RaXfGBk9OPEw5NgQ1L99C9yluYiupi7kPDnU%2BHZieNwC%2F4hTxtFbJX%2F85ppkk45nZrYgliTZXbZwy85I95aMyryHSmMOkhsQLDVNj6zBiPdmz2RStQ87AbJXsQ9%2BL8lRxKgC%2F4%2FDulNrlg780lYP9Bu3mU3FkrOcn2qz%2FDonaF9Kz8e%2F2FDrtmdWSForNixwqr6qTH%2FX1drKdGhRcEvDvvxIf5CP8JG%2F7aPO60vvZF1ukNEGnJR49nWeC38FBY0diOnhcdKBTmvI0r2l%2FjvfeU6nM1A1MUvHrscBqU574lGbnkLmuiXvYuJcqSqgR%2BwEAK5RI3mEXKQifnZt2shC48oZ6ZkQnq1QMI2FxmAQDGyAyKIU7c6R25EM9qPvF4g%2FqYP%2FdnuRA6LLurKij31rJmE6pGJmTUyf7A%2BJpjmKWA2ZiYk271KggEkkDj4UGa%2BtOBIhZab70XTdgoL5OUw84vWvwY6pgFYjRVzARJ%2FRue%2F%2BOcQJ3ebQthn4l8NZdbxJv%2BKmEvVwsDPh2OsxWL29vpulSAaG%2FUr%2FkRsAyvGyiIvLgHbKsR%2FdQhe2MfnGTqGkc4Xt1AB9lvRJp3sYgvGn0fHd%2B8dz2vgC2gK5gz1Qt0Dsx0h35TW9e%2F0gq%2Bk3cyFPzB9PdAILe%2FVuOVKMnzXifOSTjiCl07X%2F0Tzkt0ai1cUQ3yn97eETZOFf9OV&X-Amz-Signature=f37e11bbdf6ce701bdcd80ca4c5067d6366392078e4b6f07572509a401838617&X-Amz-SignedHeaders=host&x-id=GetObject)

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
