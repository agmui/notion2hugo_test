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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAL6CZCB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgu9AO4MIWuAFhoebImUxyxT0hyyyeXK8udxqGi7IzQIgSYWIjdLQlhmuYFKo%2BM2jV9oBUZlcXX%2FlaZae981HN5cq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDOkzHWcPkW%2FzgB2foSrcA%2F0Z4s2zsPf72ZoXNXXUX6OmOb3eVT8GWHp2hWt9tLepG%2F1%2Fl%2BGHOR1cCRVYVpalh7Pu9MAVA1dieViB6jztGatwmKwDKkgCZX03xbm%2FOqxCKALXL9uf1oP%2F%2B49ELMHfsiF1K%2FHrmj1d80lwY0Fw%2FcTBMK3bmNRX4Gx%2B%2Fj3JBsCKUbzBGUQNeIasPt8uHuER2vwD3pk0IXeBmNr0CC8NxQAEDT1m5fBFFKuNzosaDSsqNMxwz878k7YJDbueW8GxKmO3mNdSQsUg%2F68WQamwj4cUx5NrnBysqCVC3n1blZrCZe3DwLwdQ5bOZOwufEsfmsC1Aj24hzbt%2FQjPVxaiChTJlA7HLiczuNnr6SrnG8r0qUVVbepsAADRJOvyzfeFYrpFvV%2FOow06mh45alubXkz3uEgEuhum%2BzAjKxZ9yZFcbCTtyJsiYYytsJzVFR7mQbDAltWO%2F1EAyvkytqMo1wf32Y55y%2B%2BCcIg3RrpBdQmi1MdpeRT2bwaMq4Q9yOxygxZvIDitG0jA4l7zlUrRmP81z8loj20NXhsnuKX7JHbeYM5dpYB%2BHAxcKZzAQHj5hBlBoZLyaWM6zo3vY%2F29fSwD%2F7zLf3a6y0DlD6bWTEWdKUxT6Rpsl%2FubxKMSMLDvwb8GOqUBhn5JeMuelVuZcmxSWyBeE48tk3caEGT6Oj%2F3nMKrmTqZOpfgzNXQ3UaRKl%2B18EGRV5oiakC2TCZDe5Te%2FRayl1laQ0TKgMC9pPEaiKN7voqgBz6aNtw4%2FTOaY4iWFbIRQZ4o1F1NcZ5tYWAFRloV0Hbc6WFhC%2BgGhdKsfpBeEOG25V%2FiwYM22mhiSSC9WW20JgS6K59i%2FdUkLe45l6YloBwE%2FROm&X-Amz-Signature=04ae440cb8bd83b138a1d3e9f9bcae36c3f4e6956f1e3c5df1ff7ebc275bc6db&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAL6CZCB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbgu9AO4MIWuAFhoebImUxyxT0hyyyeXK8udxqGi7IzQIgSYWIjdLQlhmuYFKo%2BM2jV9oBUZlcXX%2FlaZae981HN5cq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDOkzHWcPkW%2FzgB2foSrcA%2F0Z4s2zsPf72ZoXNXXUX6OmOb3eVT8GWHp2hWt9tLepG%2F1%2Fl%2BGHOR1cCRVYVpalh7Pu9MAVA1dieViB6jztGatwmKwDKkgCZX03xbm%2FOqxCKALXL9uf1oP%2F%2B49ELMHfsiF1K%2FHrmj1d80lwY0Fw%2FcTBMK3bmNRX4Gx%2B%2Fj3JBsCKUbzBGUQNeIasPt8uHuER2vwD3pk0IXeBmNr0CC8NxQAEDT1m5fBFFKuNzosaDSsqNMxwz878k7YJDbueW8GxKmO3mNdSQsUg%2F68WQamwj4cUx5NrnBysqCVC3n1blZrCZe3DwLwdQ5bOZOwufEsfmsC1Aj24hzbt%2FQjPVxaiChTJlA7HLiczuNnr6SrnG8r0qUVVbepsAADRJOvyzfeFYrpFvV%2FOow06mh45alubXkz3uEgEuhum%2BzAjKxZ9yZFcbCTtyJsiYYytsJzVFR7mQbDAltWO%2F1EAyvkytqMo1wf32Y55y%2B%2BCcIg3RrpBdQmi1MdpeRT2bwaMq4Q9yOxygxZvIDitG0jA4l7zlUrRmP81z8loj20NXhsnuKX7JHbeYM5dpYB%2BHAxcKZzAQHj5hBlBoZLyaWM6zo3vY%2F29fSwD%2F7zLf3a6y0DlD6bWTEWdKUxT6Rpsl%2FubxKMSMLDvwb8GOqUBhn5JeMuelVuZcmxSWyBeE48tk3caEGT6Oj%2F3nMKrmTqZOpfgzNXQ3UaRKl%2B18EGRV5oiakC2TCZDe5Te%2FRayl1laQ0TKgMC9pPEaiKN7voqgBz6aNtw4%2FTOaY4iWFbIRQZ4o1F1NcZ5tYWAFRloV0Hbc6WFhC%2BgGhdKsfpBeEOG25V%2FiwYM22mhiSSC9WW20JgS6K59i%2FdUkLe45l6YloBwE%2FROm&X-Amz-Signature=78d42b2a0a794e9472f481959312f9094e2ac713dd3cdf1754e19729a0204722&X-Amz-SignedHeaders=host&x-id=GetObject)

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
