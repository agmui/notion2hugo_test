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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MWXSP66%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBC5Mj02ZIgXpwT8FxnQgQ9iOfV4wuIy5LXxiz1wlGuuAiA%2B%2B%2F1mJjBIsOBoLBFgnCEOLimJ4vmRISvNgR70DetwnSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1oDSURE%2Bg%2FGgNRVrKtwD0AOQ2%2FcXROI0QpE%2BkR%2F4strbsYHoG0v4pUXStCJMLeH29DU1N4s1NqI%2Fy1rZKaKccnE17F8bVz9iu3jMXxtzOQlhUo24u1rXP2H81SOn8z97EF6ZAqGr0EaVZoEhNuvzMeFIuCM9SDK3i8GHJAVETyjfDts3M7PPl2S%2F8m80KcrfuqGAopyPO%2FTM2F2Mllf0EkKrnHR8rBs8BadgTVHPREtuiSRzfcl%2FYjMU%2FQqkk7TZ4Pbnem9CKxkBrjj03W5nqOMd%2FS%2Bo5ZT9ZTQoFB2HIPbAJrYOfoNu2FyGSv1vj%2BNsUP0KKEjvQM%2FmZBT%2B2nnE1pbs%2F1L0lx0b2j60K1n3YpuSRyvUUi%2Bk%2F2ciGFAUrySYlcykwFljNNLlFVyxTIHV2u%2Boc05TJVu9z73Y92UgsUHWlWPTNrEq30xUhqqwMfIDo1RJX5ytjtASz45TFyJ5z7qISDj2jYsj6gk6gR9J%2F90VdXSmNWl7tcyYyZcvCudgAg37yPgg6cC6kL3gEDvqxq36WYb8wFG45udcp8%2FIr7FIAQj%2BbWlZfZs0Q9%2FBZMyg1vnsP7RvdVWWpAnUTunoQaN7ipJjHWqJOvV2yRQNI%2BRKA7Acr9L26u40rBHzbQejakL%2BozI2D%2F2SPocw%2BJPSvgY6pgHv81YxDweCr6tb8K1mlMbocHK%2Bb03AWX6lBGBd6OMQVj9mnNDIZcFdvOhoTDl71wj7EWEQqntgOJ3ipevRG2v4lRR%2FTVkZrxfQ31DdjCCyAkI2cUCzD2gHVv0sLzcDwv%2ByMQWsfwr4HeggAjn89eVCIQwtMtxsbH3GyvEyqLanror6B2ZQqmgoWckH%2FC86aU%2B57%2F%2FVVAAn0%2BBDK8BikvPJBknSTB6r&X-Amz-Signature=3aa176b8abdf5bb5e39e816c2949243276d1d46279970dfa9376a870012942e8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MWXSP66%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBC5Mj02ZIgXpwT8FxnQgQ9iOfV4wuIy5LXxiz1wlGuuAiA%2B%2B%2F1mJjBIsOBoLBFgnCEOLimJ4vmRISvNgR70DetwnSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1oDSURE%2Bg%2FGgNRVrKtwD0AOQ2%2FcXROI0QpE%2BkR%2F4strbsYHoG0v4pUXStCJMLeH29DU1N4s1NqI%2Fy1rZKaKccnE17F8bVz9iu3jMXxtzOQlhUo24u1rXP2H81SOn8z97EF6ZAqGr0EaVZoEhNuvzMeFIuCM9SDK3i8GHJAVETyjfDts3M7PPl2S%2F8m80KcrfuqGAopyPO%2FTM2F2Mllf0EkKrnHR8rBs8BadgTVHPREtuiSRzfcl%2FYjMU%2FQqkk7TZ4Pbnem9CKxkBrjj03W5nqOMd%2FS%2Bo5ZT9ZTQoFB2HIPbAJrYOfoNu2FyGSv1vj%2BNsUP0KKEjvQM%2FmZBT%2B2nnE1pbs%2F1L0lx0b2j60K1n3YpuSRyvUUi%2Bk%2F2ciGFAUrySYlcykwFljNNLlFVyxTIHV2u%2Boc05TJVu9z73Y92UgsUHWlWPTNrEq30xUhqqwMfIDo1RJX5ytjtASz45TFyJ5z7qISDj2jYsj6gk6gR9J%2F90VdXSmNWl7tcyYyZcvCudgAg37yPgg6cC6kL3gEDvqxq36WYb8wFG45udcp8%2FIr7FIAQj%2BbWlZfZs0Q9%2FBZMyg1vnsP7RvdVWWpAnUTunoQaN7ipJjHWqJOvV2yRQNI%2BRKA7Acr9L26u40rBHzbQejakL%2BozI2D%2F2SPocw%2BJPSvgY6pgHv81YxDweCr6tb8K1mlMbocHK%2Bb03AWX6lBGBd6OMQVj9mnNDIZcFdvOhoTDl71wj7EWEQqntgOJ3ipevRG2v4lRR%2FTVkZrxfQ31DdjCCyAkI2cUCzD2gHVv0sLzcDwv%2ByMQWsfwr4HeggAjn89eVCIQwtMtxsbH3GyvEyqLanror6B2ZQqmgoWckH%2FC86aU%2B57%2F%2FVVAAn0%2BBDK8BikvPJBknSTB6r&X-Amz-Signature=1ee18371b26127a3064412e9b2f951538ef6f58915de4a96ee86db401dc37855&X-Amz-SignedHeaders=host&x-id=GetObject)

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
