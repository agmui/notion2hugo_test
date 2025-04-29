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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZB76G3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX87pj3k6AgXF7C0W8R%2F509SyDB0HdsimtOU80bwxvfQIgNGMAEsatzwxb9W3m0qxIYgHpKCS1ZOnk7zmJZDexL18qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgEzTHtzJekHoZjiSrcAyTc5mBqmKJH5KKYswBB85%2Br095DaOTO5Iih4iCBxHTxymWA%2F%2B5JYaoFibv%2BBMWRVOe6Fel0jrBAsviBA%2BLrYkXl%2FWokVWaCdTThMvOQpJA1pMcrVwwA1yJSkrxU1VKlLIZWWidE%2Bo8QNGf9AnKcMn9wVbeN9oOue0RzDDsurwz9DdONlMVseISUB1AnMtIbGnAHzYwzyQbni3rEzJsBhUWKjQScGavq6Qcb5208Ty27oMKG0p593cHuSBqEoZ%2FcRr8dbLCbHhwDar4EJ4j%2BQkSaIPdzrBA%2BYTv0wtMutKVQ6z6zI8GP2qaWOiWuJPsAOxOo3NYtuxLEYCqedk%2FiV7bxPQn94y0NiwHxKIW%2F7Yh6ob1Yq7VwZEZSs%2B91LSotSeTjRFOxlo4S2p1CpF%2FFhNUka0OBj%2ByuzWm7IlxE7UTVIrYFoVafUhvvDJSjdxDvgRWNa%2FUHk7zGKhVKBDMwBN9CD6jId4twT4rxoZwpk0Upg6q09429mVGP28ETYH9Yrrn1ImzuNkzcM8iSPhDq3j%2BMEQKuQCmP3hqBjBH9yQyPt3Slk77%2FVBcwHw1lPz2qWhj%2FqCln5RIysajl%2BkyrwTTDxUsQSOlWkruUugALFTWIX3niwDQR1NxPnwALMPe%2BwMAGOqUB4flEWbzfkrpUrwmsf7T2oLuiuYfzJV2Ug4sllIOUDgbh6doNDLVmw7HbXqqBikYvwrTxgDuUVlZ%2FrKXvXAZ1MKVjUEuMejaYswnOMmTslZT4qqNwpjKdfG491ioqTpbvPgP6LUoE0kLCkDtr%2FsNhrktKn2C7wzvk5S50eZ6eGZIO7bgfd6ZND9RjAu8cX9qDaxMbat%2B3%2BQUBZwbd5HdYqxFUSdLD&X-Amz-Signature=b597d2260070313a63bdef040fb64a201e6ede442d35c00301f83fb8a70d13a5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZB76G3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX87pj3k6AgXF7C0W8R%2F509SyDB0HdsimtOU80bwxvfQIgNGMAEsatzwxb9W3m0qxIYgHpKCS1ZOnk7zmJZDexL18qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgEzTHtzJekHoZjiSrcAyTc5mBqmKJH5KKYswBB85%2Br095DaOTO5Iih4iCBxHTxymWA%2F%2B5JYaoFibv%2BBMWRVOe6Fel0jrBAsviBA%2BLrYkXl%2FWokVWaCdTThMvOQpJA1pMcrVwwA1yJSkrxU1VKlLIZWWidE%2Bo8QNGf9AnKcMn9wVbeN9oOue0RzDDsurwz9DdONlMVseISUB1AnMtIbGnAHzYwzyQbni3rEzJsBhUWKjQScGavq6Qcb5208Ty27oMKG0p593cHuSBqEoZ%2FcRr8dbLCbHhwDar4EJ4j%2BQkSaIPdzrBA%2BYTv0wtMutKVQ6z6zI8GP2qaWOiWuJPsAOxOo3NYtuxLEYCqedk%2FiV7bxPQn94y0NiwHxKIW%2F7Yh6ob1Yq7VwZEZSs%2B91LSotSeTjRFOxlo4S2p1CpF%2FFhNUka0OBj%2ByuzWm7IlxE7UTVIrYFoVafUhvvDJSjdxDvgRWNa%2FUHk7zGKhVKBDMwBN9CD6jId4twT4rxoZwpk0Upg6q09429mVGP28ETYH9Yrrn1ImzuNkzcM8iSPhDq3j%2BMEQKuQCmP3hqBjBH9yQyPt3Slk77%2FVBcwHw1lPz2qWhj%2FqCln5RIysajl%2BkyrwTTDxUsQSOlWkruUugALFTWIX3niwDQR1NxPnwALMPe%2BwMAGOqUB4flEWbzfkrpUrwmsf7T2oLuiuYfzJV2Ug4sllIOUDgbh6doNDLVmw7HbXqqBikYvwrTxgDuUVlZ%2FrKXvXAZ1MKVjUEuMejaYswnOMmTslZT4qqNwpjKdfG491ioqTpbvPgP6LUoE0kLCkDtr%2FsNhrktKn2C7wzvk5S50eZ6eGZIO7bgfd6ZND9RjAu8cX9qDaxMbat%2B3%2BQUBZwbd5HdYqxFUSdLD&X-Amz-Signature=4d99810b14c86c82f80a83538886e079bfa665bb3f90c7fb8ca3a0c1f64344d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
