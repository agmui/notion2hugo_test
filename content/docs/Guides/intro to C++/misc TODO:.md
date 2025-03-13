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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SK3PR6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWsst3vp%2Be1asOJSfjMmUWpnapp8zCYA3AmcLj69LOVQIhAMN40cUkqxKw2nxcUrrhbCW5OAm45mVvfGjFfxlMEdBqKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS5gH8G9siIfWwF9Mq3AONWLE%2BRsbGBE2iwljy8CNHwB9lPVsK2zakPfL2EOhU0LZ2kyrzryAlsNeooTkrdYfgwk0E4uO4JvciKnv5ItygIghBYuqnjqTRckvOkzGWQhfpSR4P4wjDnYSrXEbz6yuACcSuJcFZjqRA6tCW7POVcz9bwgmN93%2B%2FEhcCHqY9it7UPtImbiBzCTpLWiWpB0ymK5p3J6rvGhc7y9aCrzj1l5RVcDVvUZqqLD9TLhY3HY7wSbmrWTqzJE1KABIYiCzqHRWKnc4pWtPH0IezujzvK98yNSd%2FVkH0wghR6j00YJSXC6Jb1vIyiPfymYFX%2BpbkBL24UMdfflJVxxQhf%2BgVAtL%2FNZPs4G8Mb5Gz1WSsdtDVB%2FRUxeJ7Bh0VxOUwvNOVHtQtx5CyUfo29qf72Wkw%2FlP%2FaGd0eL5XJKBmVSyYaqniYNMuUkIy%2FGA5TbzSeWUUUogfmriwlsJgiRE1IQf8pLsC5TJwk4qzGMPXBcq8s%2FJeW7w3G5Z9ASMm42mFPPrXDbdXAzfUzhBYZ%2BqoSuDINULvJ89CgUlaz1sAPfSbFfJFvMtoNGp94uK1m028CGoQ6kiRXI3adcrOH92Pky3YENCIfI6fx6JE2OL%2FxJqven1HQvmvUY3jCVxhdjCYh8m%2BBjqkAXhiIksjrF9hypPD%2FYvnMJ907R%2B7717g8beUcE18i2opCaf0rBqn9M2JpBbjdAkBCIO9SSjcJOUZDoTaKX%2BUzhUPjcH8aM9LoZZ%2FzS4myC%2FyyN863jEIOHTTRlA4ZvDoUv1FuxWU06aUh%2FMxgixMSlLdeAfPNPaBoCee0R84cPU5tsBEpgPMy4XMT0uWr3DDk2JqJaqI1lWW0f7IOBDSELPT%2Be9P&X-Amz-Signature=93059f5718c7323955a9c290df689591bc24ce35c0f5eeb60c05a3b635e42e81&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4SK3PR6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWsst3vp%2Be1asOJSfjMmUWpnapp8zCYA3AmcLj69LOVQIhAMN40cUkqxKw2nxcUrrhbCW5OAm45mVvfGjFfxlMEdBqKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS5gH8G9siIfWwF9Mq3AONWLE%2BRsbGBE2iwljy8CNHwB9lPVsK2zakPfL2EOhU0LZ2kyrzryAlsNeooTkrdYfgwk0E4uO4JvciKnv5ItygIghBYuqnjqTRckvOkzGWQhfpSR4P4wjDnYSrXEbz6yuACcSuJcFZjqRA6tCW7POVcz9bwgmN93%2B%2FEhcCHqY9it7UPtImbiBzCTpLWiWpB0ymK5p3J6rvGhc7y9aCrzj1l5RVcDVvUZqqLD9TLhY3HY7wSbmrWTqzJE1KABIYiCzqHRWKnc4pWtPH0IezujzvK98yNSd%2FVkH0wghR6j00YJSXC6Jb1vIyiPfymYFX%2BpbkBL24UMdfflJVxxQhf%2BgVAtL%2FNZPs4G8Mb5Gz1WSsdtDVB%2FRUxeJ7Bh0VxOUwvNOVHtQtx5CyUfo29qf72Wkw%2FlP%2FaGd0eL5XJKBmVSyYaqniYNMuUkIy%2FGA5TbzSeWUUUogfmriwlsJgiRE1IQf8pLsC5TJwk4qzGMPXBcq8s%2FJeW7w3G5Z9ASMm42mFPPrXDbdXAzfUzhBYZ%2BqoSuDINULvJ89CgUlaz1sAPfSbFfJFvMtoNGp94uK1m028CGoQ6kiRXI3adcrOH92Pky3YENCIfI6fx6JE2OL%2FxJqven1HQvmvUY3jCVxhdjCYh8m%2BBjqkAXhiIksjrF9hypPD%2FYvnMJ907R%2B7717g8beUcE18i2opCaf0rBqn9M2JpBbjdAkBCIO9SSjcJOUZDoTaKX%2BUzhUPjcH8aM9LoZZ%2FzS4myC%2FyyN863jEIOHTTRlA4ZvDoUv1FuxWU06aUh%2FMxgixMSlLdeAfPNPaBoCee0R84cPU5tsBEpgPMy4XMT0uWr3DDk2JqJaqI1lWW0f7IOBDSELPT%2Be9P&X-Amz-Signature=ff28611595449d13066885367b62bd43269573a5d3410110a860c2b0c2624b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
