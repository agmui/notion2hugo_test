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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUEO7G4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDuMDQSY%2F4pSQT%2BPDSY2iQ5JJl1Ev%2FS0HakONSXdYTHmAiEA43SkBXqHQhx%2BbULxtDe4tc4VVPLhHWVnMM%2FCnOQgYTwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY%2BDGkTdL557YtrTSrcAyEOiNAfalksp%2FwrL01raoWNqcRVAkQk7EpPgrY1kGQDzUGr8Mj64UwzWe0WUtwN1CxS%2BjbNU%2B2499Y4aUKTwrAiNIjl3E2kckgWgIVjh24pIhGtrGie9YWVvadBCEbetyPpRcrW0GFUn3oEzeM2VQCgWFOLPrD1PzrJAFEbF9wJ%2BARDIZvZC6FG65G%2BWaz0WHmYMgszgmAhLAX53C6Li%2FikhjlkyUsLWosun%2FMcZxknFNVgL5NWpF4fRzNrqLOV4mbykcsCwV9PemTfW%2FX7IoX3%2BWAyZObtb6SLOuwvkBncbzdabWxUawa5y1jBGpclngzNb70F2SX8DjgTMMj%2Be26PQh2TZrUh7mibaFNcXO3MNLzNtBYHATq64qFyXvw1ti5N9vpDHAgXJ%2FNibJusVZxCx0zF0ddBg7LDDyPQAjCFC2XzmXObzzTt8%2BllQdPSm4U8fd0mnYm5v%2Fv0BIZlbE3cXolgsqq1%2BFaM7maWQ9skQchOgmc8Ylz3ybt3dMTrWkvwhIq1e9mUEr46ZQdE%2BJ2430bqo%2FQUasUmIxwB%2F%2Fc6gZ4WrvJ1fpbR9qVGRgHzX1Mc3tjTDtgnMl6hiW5gyhG7GUpbkk4YVGj9vdKHMqyLRPeeIyOuBc19lTWwMIiEssMGOqUBuHrstJa3Vefb0lBCDEcBjasifIibjXSfHpjfW%2BUikACsea8ellrfPwVKDUTdz%2FZu19ggH8sk1%2BaGG%2F0C2%2BROCjNFIFyaHCQCz6zEeYEae0B5lF40urAg97EbTJHGZFx7M8HgFWbFGBcr64qQpNgJrhcQsddHIYWzInc5C%2FqjqU1Cv0nqaXGuFIaRdVZVgguwWy6eIvCcqyjUFWEezn5OZno0fkB6&X-Amz-Signature=7089f9c3ddf8dca540bf000de1b0f211d003c16b8aeab1f126eeedf5df0d9313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUEO7G4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIDuMDQSY%2F4pSQT%2BPDSY2iQ5JJl1Ev%2FS0HakONSXdYTHmAiEA43SkBXqHQhx%2BbULxtDe4tc4VVPLhHWVnMM%2FCnOQgYTwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY%2BDGkTdL557YtrTSrcAyEOiNAfalksp%2FwrL01raoWNqcRVAkQk7EpPgrY1kGQDzUGr8Mj64UwzWe0WUtwN1CxS%2BjbNU%2B2499Y4aUKTwrAiNIjl3E2kckgWgIVjh24pIhGtrGie9YWVvadBCEbetyPpRcrW0GFUn3oEzeM2VQCgWFOLPrD1PzrJAFEbF9wJ%2BARDIZvZC6FG65G%2BWaz0WHmYMgszgmAhLAX53C6Li%2FikhjlkyUsLWosun%2FMcZxknFNVgL5NWpF4fRzNrqLOV4mbykcsCwV9PemTfW%2FX7IoX3%2BWAyZObtb6SLOuwvkBncbzdabWxUawa5y1jBGpclngzNb70F2SX8DjgTMMj%2Be26PQh2TZrUh7mibaFNcXO3MNLzNtBYHATq64qFyXvw1ti5N9vpDHAgXJ%2FNibJusVZxCx0zF0ddBg7LDDyPQAjCFC2XzmXObzzTt8%2BllQdPSm4U8fd0mnYm5v%2Fv0BIZlbE3cXolgsqq1%2BFaM7maWQ9skQchOgmc8Ylz3ybt3dMTrWkvwhIq1e9mUEr46ZQdE%2BJ2430bqo%2FQUasUmIxwB%2F%2Fc6gZ4WrvJ1fpbR9qVGRgHzX1Mc3tjTDtgnMl6hiW5gyhG7GUpbkk4YVGj9vdKHMqyLRPeeIyOuBc19lTWwMIiEssMGOqUBuHrstJa3Vefb0lBCDEcBjasifIibjXSfHpjfW%2BUikACsea8ellrfPwVKDUTdz%2FZu19ggH8sk1%2BaGG%2F0C2%2BROCjNFIFyaHCQCz6zEeYEae0B5lF40urAg97EbTJHGZFx7M8HgFWbFGBcr64qQpNgJrhcQsddHIYWzInc5C%2FqjqU1Cv0nqaXGuFIaRdVZVgguwWy6eIvCcqyjUFWEezn5OZno0fkB6&X-Amz-Signature=588a4c8b4539ace49766b914f941016a3e4bd69d9e4446e79550929a6d0fada7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
