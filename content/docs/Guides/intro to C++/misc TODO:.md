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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCRGASB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2M%2BguAIRhrhQRYyF47WavKrDYayLnU6LjFsHnphtLmAiBVb3DJ82QL0peYjyLLlBhbwRCy43%2BgOv1E6cvli95p%2BiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocEvmLRHlTSdxQRiKtwDBUJ8iYztAZRrNIbVkWfxneR5aRdHFHgSCgYtLCZUxE5MzG2kjWmLRfqpioILnyrdgnKFN28CbAjoKjbCKlPIhD4vf86%2FW0rxWXJTguSZQisrRFD4yzH7AlWDP1MrJfyyTig65bxFMfYf2ZeY6cF%2Fvtes1lm1z0AUTvWQaFRO3klA6k4y72BYwfT9wkxENp6a1k40xmYeZbqUpiyGh4HlhomZAmRpM8%2FbO0o7tvL4vm44gwRYrZkPHqH74kqbsRAqNRRc%2Fc9dwv9dime45bseJ1Tv63SLUYNxRKpGizZ3ddyMHd1tHafLZRxxQ%2BITInUlGpwa%2B%2F73qHtW%2F887bOyJuJZ0Bz3N1%2FLNrKcQYxss0M4B7tmCSJ2RswOV%2FhIsCjV%2FBP9P2PF%2FPg1yiPfLO03hPhBZ%2B4CAzJGvFIZpNdawqF0QsCc%2BypTpBWULDrMGclOjBaE5TguT4%2BQwkcsc00jUvzBxs7twUsBzjCO1b5NYVxZDrpWyuVEB05AsJEtTJ8Ks1iYSjkpPJ5tchDZ95ukdmtxd49XBhnQp0jTFQ54DmBqSIOTpjoC%2F7SZthCMWoP86dN2uKnIpLPmE%2Bvr6Qddicxn%2FBkFrCW27%2BIFE328tse4KSgx6Ewo9b3rL71kw97OWwgY6pgFDurKy3j6oNSAVwhEBZk1sSchyORc5lHuYhEUK1l8JmMNkeY1AxBISnptIyyZi%2BCZDRGZT6azEMuq8kkfL97J6R4v1KOsyD%2FzUnbWXefTenSXALIWgzUabXHb9mHyHxGqxCf5BVlYIltyeIsrhOWiBfUfkx6CLedb8EqYf0OvX6F7PRnA1%2BAetV22M9hk8foO94Fd%2Bk%2BkAWTkiCsxK9iGIZgvAZgE2&X-Amz-Signature=bb4673b8d1e47cabf338fcc9e52ac619867597ead61d1fdafa5809a6cacf56b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCRGASB%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2M%2BguAIRhrhQRYyF47WavKrDYayLnU6LjFsHnphtLmAiBVb3DJ82QL0peYjyLLlBhbwRCy43%2BgOv1E6cvli95p%2BiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMocEvmLRHlTSdxQRiKtwDBUJ8iYztAZRrNIbVkWfxneR5aRdHFHgSCgYtLCZUxE5MzG2kjWmLRfqpioILnyrdgnKFN28CbAjoKjbCKlPIhD4vf86%2FW0rxWXJTguSZQisrRFD4yzH7AlWDP1MrJfyyTig65bxFMfYf2ZeY6cF%2Fvtes1lm1z0AUTvWQaFRO3klA6k4y72BYwfT9wkxENp6a1k40xmYeZbqUpiyGh4HlhomZAmRpM8%2FbO0o7tvL4vm44gwRYrZkPHqH74kqbsRAqNRRc%2Fc9dwv9dime45bseJ1Tv63SLUYNxRKpGizZ3ddyMHd1tHafLZRxxQ%2BITInUlGpwa%2B%2F73qHtW%2F887bOyJuJZ0Bz3N1%2FLNrKcQYxss0M4B7tmCSJ2RswOV%2FhIsCjV%2FBP9P2PF%2FPg1yiPfLO03hPhBZ%2B4CAzJGvFIZpNdawqF0QsCc%2BypTpBWULDrMGclOjBaE5TguT4%2BQwkcsc00jUvzBxs7twUsBzjCO1b5NYVxZDrpWyuVEB05AsJEtTJ8Ks1iYSjkpPJ5tchDZ95ukdmtxd49XBhnQp0jTFQ54DmBqSIOTpjoC%2F7SZthCMWoP86dN2uKnIpLPmE%2Bvr6Qddicxn%2FBkFrCW27%2BIFE328tse4KSgx6Ewo9b3rL71kw97OWwgY6pgFDurKy3j6oNSAVwhEBZk1sSchyORc5lHuYhEUK1l8JmMNkeY1AxBISnptIyyZi%2BCZDRGZT6azEMuq8kkfL97J6R4v1KOsyD%2FzUnbWXefTenSXALIWgzUabXHb9mHyHxGqxCf5BVlYIltyeIsrhOWiBfUfkx6CLedb8EqYf0OvX6F7PRnA1%2BAetV22M9hk8foO94Fd%2Bk%2BkAWTkiCsxK9iGIZgvAZgE2&X-Amz-Signature=49f536afc65751bc3e7b0763ca9d52fc116140a54ccda856e5afc9f17fe10aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
